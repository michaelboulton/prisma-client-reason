open Jest
open Expect

type camelCaseTest = {
  input: string,
  expected: string,
}

describe("camelcasing", () => {
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

  testAll(
    "1",
    list{
      {input: "Hello", expected: "hello"},
      {input: "hello", expected: "hello"},
      {input: "AnotherThing", expected: "anotherThing"},
    },
    test => toField(~name=test.input, ())->Helpers.toObjectKey->expect->toBe(test.expected),
  )
})
