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
  | (None, _) =>
    // No relation - basic type
    switch field.type_ {
    | "Int" => "int"
    | "Float" => "float"
    | "String" => "string"
    | "Boolean" => "bool"
    | "DateTime" => "string"
    | _ => raise(BadPrimitiveType({message: `No relation but found unknown type: ${field.type_}`}))
    }
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
let toObjectKey = (field: Prisma.field) => Lodash.camelCase(field.name)

/**
Returns annotation if required
*/
let annotation = (field: Prisma.field) =>
  if toObjectKey(field) != field.name {
    Some(`@as("${field.name}")`)
  } else {
    None
  }

/** converts from a field to a string */
type fieldPrinters = {
  toObjectType: Prisma.field => string,
  toNamedArgumentType: Prisma.field => string,
  toNamedArgument: Prisma.field => string,
  toObjectKeyValue: Prisma.field => string,
}

@genType
let toObjectType: Prisma.field => string = field =>
  switch (field.isList, field.relationName, field.isRequired) {
  | (_, _, _) => `${toObjectKey(field)}: ${toObjectKey(field)}`
  }

@genType
let toNamedArgument: Prisma.field => string = field => {
  let type_ = toPrimitiveType(field)

  switch (field.isList, field.relationName, field.isRequired) {
  // If it's not required, this can be introspected from the actual type specified in toNamedArgumentType
  | (_, _, false)
  | // If it's a list but has no relation, also can just be introspected
  (true, None, _) =>
    `~${toObjectKey(field)}=?`
  // If it's not a list, use the type from toPrimitiveType which takes relations into account
  | (false, _, _) => `~${toObjectKey(field)}: ${type_}`
  // If it's a list and has a relation, it should be an array
  | (true, Some(_), _) => `~${toObjectKey(field)}: array<${type_}>`
  }
}
