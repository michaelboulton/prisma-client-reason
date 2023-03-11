open Jest
open Expect

type camelCaseTest = {
  input: string,
  expected: string,
}

type annotationTest = {
  input: string,
  maybeExpected: option<string>,
}

let toField = (
  ~kind: Helpers.Prisma.fieldKind=#object,
  ~name: string="ExampleName",
  ~isRequired: bool=false,
  ~isList: bool=false,
  ~isUnique: bool=false,
  ~type_: string="ExampleType",
  (),
) => {
  open! Helpers.Prisma

  {
    kind,
    name,
    isRequired,
    isList,
    isUnique,
    type_,
  }
}

describe("helpers", () => {
  testAll(
    "camelcasing",
    list{
      {input: "Hello", expected: "hello"},
      {input: "hello", expected: "hello"},
      {input: "AnotherThing", expected: "anotherThing"},
    },
    test => toField(~name=test.input, ())->Helpers.toObjectKey->expect->toBe(test.expected),
  )
  testAll(
    "annotation",
    list{
      {input: "Hello", maybeExpected: Some(`@as("Hello")`)},
      {input: "hello", maybeExpected: None},
    },
    test => toField(~name=test.input, ())->Helpers.annotation->expect->toBe(test.maybeExpected),
  )
})
