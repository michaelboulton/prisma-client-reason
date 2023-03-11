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

module Lodash = {
  @module("lodash")
  external camelCase: string => string = "camelCase"
}

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
    | allMatches => Belt.Result.Ok(allMatches)
    }
  })
}

let toPrimitiveType = (field: Prisma.field) => {
  switch field.type_ {
  | "Int" => "int"
  | "Float" => "float"
  | "String" => "string"
  | "Boolean" => "bool"
  | "DateTime" => "string"
  | _ =>
    switch field.relationName {
    | None => `${field.type_}.t`
    | Some(relationName) =>
      switch field.type_ {
      | "FindMany" => {
          let findManyRe = %re("/([A-Z][a-z]+)/")

          let matches = findManyRe->Js.Re.exec_(relationName)->Belt.Option.getExn->Js.Re.captures
          let findName = matches[0]->Js.Nullable.toOption->Belt.Option.getExn

          `Externals.${findName}.${field.type_}.t`
        }
      | _ => {
          let r =
            (relatedTo(field)->Belt.Result.getExn)[1]->Js.Nullable.toOption->Belt.Option.getExn

          if r == field.type_ {
            `${r}.WhereUniqueInput.t`
          } else {
            `${field.type_}.WhereUniqueInput.t`
          }
        }
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
