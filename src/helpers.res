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
  | (_, "DateTime") => "string"
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

exception Todo

/**
Returns the type of the field in the object
*/
@genType
let toObjectType: Prisma.field => string = field => {
  let keyName = toObjectKeyName(field)

  let key = switch (field.isRequired, annotation(field)) {
  | (false, Some(a)) => `${a} ${keyName}?`
  | (true, Some(a)) => `${a} ${keyName}`
  | (false, None) => `${keyName}?`
  | (true, None) => `${keyName}`
  }

  let type_ = toPrimitiveType(field)

  let force_relation = () => {
    relatedTo(field)->Belt.Result.getExn
  }

  let recordType = switch (field.type_, field.isList, field.relationName, field.isRequired) {
  // Non-required list => optional array
  | (_, true, None, false) => `array<${type_}>`
  // required list => array
  | (_, true, None, true) => `array<${type_}>`
  // non-required non-list => optional type is taken care of in the key
  | (_, false, None, false) => `${type_}`
  // required non-list => raw type
  | (_, false, None, true) => `${type_}`
  /* *************** */
  // A not required relation implies, or a 'FindMany', implies a 'select' field.
  // Note these two cases come from different contexts.
  | ("FindMany", _, Some(_), _)
  | (_, _, Some(_), false) =>
    `${type_}`
  // List relation which is required implies a many-to-many link
  | (_, true, Some(_), _) => `array<${force_relation()[1]}.WhereUniqueInput.t>`
  // Non-list relation which is required implies a 'unique' selection on the relation
  | (_, false, Some(_), _) => `${force_relation()[2]}.WhereUniqueInput.t`
  /* *************** */
  | _ => raise(Todo)
  }

  `${key}: ${recordType}`
}

/**
The assignment in the actual construction of the record type
*/
@genType
let toObjectKeyValue: Prisma.field => string = field =>
  switch (field.isList, field.relationName, field.isRequired) {
  | (_, _, true) => `${toObjectKeyName(field)}: ${toObjectKeyName(field)}`
  | (_, _, false) => `?${toObjectKeyName(field)}`
  }

type namedArgumentArgs = {
  arg: string,
  type_: string,
}

let toNamedArgumentImpl: Prisma.field => namedArgumentArgs = field => {
  let type_ = toPrimitiveType(field)

  switch (field.type_, field.isList, field.relationName, field.isRequired) {
  // If it has a relation and its a boolean type, it's a "select" field, so it's just a bool
  | ("Boolean", true, Some(_), true) => {
      arg: "bool=?",
      type_: "bool=?",
    }
  // Non-required relation field => Optional
  | (_, _, Some(_), false) => {
      arg: `=?`,
      type_: `${type_}=?`,
    }
  // whether its a list or not, if it has no relation, not required => optional
  | (_, true, None, false) => {
      arg: `=?`,
      type_: `array<${type_}>=?`,
    }
  | (_, false, None, false) => {
      arg: `=?`,
      type_: `${type_}=?`,
    }
  // list, no relation, is required => array
  | (_, true, None, true) => {
      arg: `: array<${type_}>`,
      type_: `array<${type_}>`,
    }
  // not a list, no relation, is required => the raw type
  | (_, false, None, true) => {
      arg: `: ${type_}`,
      type_: `${type_}`,
    }

  // required non-list relation field
  | (_, false, Some(_), true) => {
      arg: `: ${type_}`,
      type_: `${type_}`,
    }
  | _ => raise(Todo)
  }
}

/**
The argument in the implementation of the make function
*/
@genType
let toNamedArgument: Prisma.field => string = field =>
  `~${toObjectKeyName(field)}${toNamedArgumentImpl(field).arg}`

/**
The argument in the interface of the make function
*/
@genType
let toNamedArgumentType: Prisma.field => string = field =>
  `~${toObjectKeyName(field)}: ${toNamedArgumentImpl(field).type_}`
