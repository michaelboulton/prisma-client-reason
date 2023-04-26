module Prisma = {
  type fieldKind = [
    | #scalar
    | #object
    | #enum
    | #unsupported
  ]

  type field = {
    kind: fieldKind,
    name: string,
    isRequired: bool,
    isList: bool,
    isUnique: bool,
    @as("type") type_: string,
    dbNames?: Js.Nullable.t<array<string>>,
    relationToFields?: array<string>,
    relationName?: string,
  }
}

/** Re-exports of lodash functions */
module Lodash: {
  let camelCase: string => string
} = {
  type t

  @module("lodash")
  external default: t = "default"

  @send
  external camelCase_: (t, string) => string = "camelCase"

  let camelCase: string => string = s => default->camelCase_(s)
}

let ok_or: (option<'a>, Belt.Result.t<'a, 'b>) => Belt.Result.t<'a, 'b> = (o, e) =>
  switch o {
  | Some(x) => Ok(x)
  | None => e
  }

/**
Gets the names of types in a relation
*/
let relatedTo = (field: Prisma.field) => {
  // Note: this can't be defined globally
  let relationRegex = %re("/([A-Za-z]+?)To([A-Za-z]+)/g")

  field.relationName
  ->ok_or(Error("No relation name"))
  ->Belt.Result.flatMap(relationName => {
    relationRegex
    ->Js.Re.exec_(relationName)
    ->ok_or(Belt.Result.Error(`No matches for regex: ${relationName}`))
  })
  ->Belt.Result.flatMap(match => {
    let captures = match->Js.Re.captures

    switch captures {
    | [] | [_] => Belt.Result.Error("less matches than expected")
    | allMatches =>
      allMatches
      ->Js.Array2.map(elem => elem->Js.Nullable.toOption->Belt.Option.getExn)
      ->Belt.Result.Ok
    }
  })
}

let force_relation = field => {
  relatedTo(field)->Belt.Result.getExn
}

exception BadPrimitiveType({message: string})

/**
Gets the basic type a field should be based on the prisma type and whether it has relations
*/
let toPrimitiveType = (field: Prisma.field) => {
  switch (field.relationName, field.type_) {
  // basic type
  | (_, "Int") => "int"
  | (_, "Float") => "float"
  | (_, "String") => "string"
  | (_, "Boolean") => "bool"
  | (_, "DateTime") => "Js.Date.t"
  | (None, _) =>
    raise(BadPrimitiveType({message: `No relation but found unknown type: ${field.type_}`}))
  | (Some(relationName), "FindMany") => {
      // FindMany relation - uses the special 'find' types generated for this purpose
      let findManyRe = %re("/([A-Z][a-z]+)/")

      let found = switch findManyRe->Js.Re.exec_(relationName) {
      | Some(item) => item
      | None =>
        raise(BadPrimitiveType({message: `Could not determine relation name: ${field.type_}`}))
      }

      let matches = found->Js.Re.captures

      let findName = switch matches[0]->Js.Nullable.toOption {
      | Some(item) => item
      | None =>
        raise(BadPrimitiveType({message: `Regex matched but returned undefined: ${field.type_}`}))
      }

      `Externals.${findName}.${field.type_}.t`
    }
  | (_, _) => {
      // Other relation - find which way the relation is and use the 'where' type generated for that purpose
      let matches = switch relatedTo(field) {
      | Ok(item) => item
      | Error(msg) =>
        raise(
          BadPrimitiveType({
            message: `Could not find relation (expected to be in the format 'FieldToOtherField'): ${field.type_}: ${msg}`,
          }),
        )
      }
      let r = matches[1]

      // FIXME: This can sometimes be CreateLinkArgs but it needs to pass context (is it a query or a create/update) down to this function so it can actually tell which one to use.
      if r == field.type_ {
        `${r}.WhereUniqueInput.t`
      } else {
        `${field.type_}.WhereUniqueInput.t`
      }
    }
  }
}

/**
Convert to a field name for use in reason
*/
let toObjectKeyName = (field: Prisma.field) => Lodash.camelCase(field.name)

/**
Returns annotation if required
*/
let annotation = (field: Prisma.field) =>
  if toObjectKeyName(field) != field.name {
    Some(`@as("${field.name}")`)
  } else {
    None
  }

type namedArgumentArgs = {
  namedArgument: string,
  namedArgumentType: string,
  objectType: string,
  objectKey: string,
  objectKeyValue: string,
}

let toNamedArgumentImpl: Prisma.field => namedArgumentArgs = field => {
  // Even if it's marked as required, if it is a relation, it actually isn't!
  let isRequired = switch (field.relationName, field.isRequired) {
  | (Some(_), _) => false
  | (None, r) => r
  }

  let objectKeyValue = switch isRequired {
  | true => `${toObjectKeyName(field)}: ${toObjectKeyName(field)}`
  | false => `?${toObjectKeyName(field)}`
  }

  let keyName = toObjectKeyName(field)
  let objectKey = switch (isRequired, annotation(field)) {
  | (false, Some(a)) => `${a} ${keyName}?`
  | (true, Some(a)) => `${a} ${keyName}`
  | (false, None) => `${keyName}?`
  | (true, None) => `${keyName}`
  }

  let type_ = toPrimitiveType(field)

  switch (field.type_, field.isList, field.relationName, isRequired) {
  // If it has a relation and its a boolean type, it's a "select" field, so it's just a bool
  | ("Boolean", true, Some(_), true) => {
      namedArgument: "bool=?",
      namedArgumentType: "bool=?",
      objectType: "bool",
      objectKey,
      objectKeyValue,
    }
  // Non-required relation field => Optional
  | ("FindMany", _, Some(_), false)
  | (_, _, Some(_), false) => {
      namedArgument: `=?`,
      namedArgumentType: `${type_}=?`,
      objectType: `${type_}`,
      objectKey,
      objectKeyValue,
    }
  // whether its a list or not, if it has no relation, not required => optional
  | (_, true, None, false) => {
      namedArgument: `=?`,
      namedArgumentType: `array<${type_}>=?`,
      objectType: `array<${type_}>`,
      objectKey,
      objectKeyValue,
    }
  | (_, false, None, false) => {
      namedArgument: `=?`,
      namedArgumentType: `${type_}=?`,
      objectType: `${type_}`,
      objectKey,
      objectKeyValue,
    }
  // list, no relation, is required => array
  | (_, true, None, true) => {
      namedArgument: `: array<${type_}>`,
      namedArgumentType: `array<${type_}>`,
      objectType: `array<${type_}>`,
      objectKey,
      objectKeyValue,
    }
  // not a list, no relation, is required => the raw type
  | (_, false, None, true) => {
      namedArgument: `: ${type_}`,
      namedArgumentType: `${type_}`,
      objectType: `${type_}`,
      objectKey,
      objectKeyValue,
    }

  // required non-list relation field
  | (_, false, Some(_), true) => {
      namedArgument: `: ${type_}`,
      namedArgumentType: `${type_}`,
      objectType: `${force_relation(field)[2]}.WhereUniqueInput.t`,
      objectKey,
      objectKeyValue,
    }
  // required list relation field
  | (_, true, Some(_), true) => {
      namedArgument: `: array<${type_}>`,
      namedArgumentType: `array<${type_}>`,
      objectType: `array<${force_relation(field)[1]}.WhereUniqueInput.t>`,
      objectKey,
      objectKeyValue,
    }
  }
}

/**
The argument in the implementation of the make function
*/
@genType
let toNamedArgument: Prisma.field => string = field =>
  `~${toObjectKeyName(field)}${toNamedArgumentImpl(field).namedArgument}`

/**
The argument in the interface of the make function
*/
@genType
let toNamedArgumentType: Prisma.field => string = field =>
  `~${toObjectKeyName(field)}: ${toNamedArgumentImpl(field).namedArgumentType}`

/**
Returns the type of the field in the object
*/
@genType
let toObjectType: Prisma.field => string = field => {
  let parsed = toNamedArgumentImpl(field)
  `${parsed.objectKey}: ${parsed.objectType}`
}

/**
The assignment in the actual construction of the record type
*/
@genType
let toObjectKeyValue: Prisma.field => string = field =>
  `${toNamedArgumentImpl(field).objectKeyValue}`
