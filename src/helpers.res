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

/**
Gets the names of types in a relation
*/
let relatedTo = (field: Prisma.field) => {
  field.relationName
  ->Belt.Option.flatMap(relationName => {
    let re = %re("/([A-Za-z]+?)To([A-Za-z]+)/g")

    re->Js.Re.exec_(relationName)
  })
  ->Belt.Option.mapWithDefault(Belt.Result.Error("No matches"), match => {
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

exception UnknownType({message: string})

/**
Gets the basic type a field should be based on the prisma type and whether it has relations
*/
@genType
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
    | _ => raise(UnknownType({message: field.type_}))
    }
  | (Some(relationName), "FindMany") => {
      // FindMany relation - uses the special 'find' types generated for this purpose
      let findManyRe = %re("/([A-Z][a-z]+)/")

      let matches = findManyRe->Js.Re.exec_(relationName)->Belt.Option.getExn->Js.Re.captures
      let findName = matches[0]->Js.Nullable.toOption->Belt.Option.getExn

      `Externals.${findName}.${field.type_}.t`
    }
  | (_, _) => {
      // Other relation - find which way the relation is and use the 'where' type generated for that purpose
      let r = (relatedTo(field)->Belt.Result.getExn)[1]

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
@genType
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
  objectType: Prisma.field => string,
  namedArgumentType: Prisma.field => string,
  namedArgument: Prisma.field => string,
}
