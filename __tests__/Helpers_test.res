open Jest
open Expect

type definiteOutputTest = {
  input: string,
  expected: string,
}

type maybeOutputTest = {
  input: string,
  maybeExpected: option<string>,
}

let toField = (
  ~kind: Helpers.Prisma.fieldKind=#object,
  ~name: string="exampleName",
  ~isRequired: bool=false,
  ~isList: bool=false,
  ~isUnique: bool=false,
  ~type_: string="Int",
  ~relationName: option<string>=?,
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
    ?relationName,
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
    test => toField(~name=test.input, ())->Helpers.toObjectKeyName->expect->toBe(test.expected),
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

describe("argument printers without relations", () => {
  let testExamples = list{
    {
      // Not required, but a list => still implicit type
      "input": toField(~isList=false, ~isRequired=true, ()),
      "namedArgument": "~exampleName: int",
      "toNamedArgumentType": "~exampleName: int",
      "toObjectKeyValue": "exampleName: exampleName",
      "toObjectType": "exampleName: int",
    },
    {
      // Required list => array type
      "input": toField(~isList=true, ~isRequired=true, ()),
      "namedArgument": "~exampleName=?",
      "toNamedArgumentType": "~exampleName: array<int>",
      "toObjectKeyValue": "exampleName: exampleName",
      "toObjectType": "exampleName: array<int>",
    },
    {
      // Not required => implicit type
      "input": toField(~isList=false, ~isRequired=false, ()),
      "namedArgument": "~exampleName=?",
      "toNamedArgumentType": "~exampleName: array<int>=?",
      "toObjectKeyValue": "?exampleName",
      "toObjectType": "exampleName?: int",
    },
    {
      // Required list => array type
      "input": toField(~isList=true, ~isRequired=false, ()),
      "namedArgument": "~exampleName=?",
      "toNamedArgumentType": "~exampleName: int=?",
      "toObjectKeyValue": "?exampleName",
      "toObjectType": "exampleName?: array<int>",
    },
  }

  testAll("named argument", testExamples, test => {
    test["input"]->Helpers.toNamedArgument->expect->toBe(test["namedArgument"])
  })

  testAll("named argument type", testExamples, test => {
    test["input"]->Helpers.toNamedArgumentType->expect->toBe(test["toNamedArgumentType"])
  })

  testAll("object key value", testExamples, test => {
    test["input"]->Helpers.toObjectKeyValue->expect->toBe(test["toObjectKeyValue"])
  })

  testAll("object type", testExamples, test => {
    test["input"]->Helpers.toObjectType->expect->toBe(test["toObjectType"])
  })
})

describe("argument printers with relations", () => {
  let testExamples = Array.to_list([
    {
      // Relation and required, one to one
      "input": toField(
        ~isList=false,
        ~isRequired=true,
        ~name="Cool",
        ~type_="One",
        ~relationName="CoolToOne",
        (),
      ),
      "namedArgument": "~cool: One.WhereUniqueInput.t",
      "toNamedArgumentType": "~cool: One.WhereUniqueInput.t=?",
      "toObjectKeyValue": "cool: cool",
      "toObjectType": `@as("Cool") cool: One.WhereUniqueInput.t`,
    },
  ])

  testAll("named argument", testExamples, test => {
    test["input"]->Helpers.toNamedArgument->expect->toBe(test["namedArgument"])
  })

  testAll("named argument type", testExamples, test => {
    test["input"]->Helpers.toNamedArgumentType->expect->toBe(test["toNamedArgumentType"])
  })

  testAll("object key value", testExamples, test => {
    test["input"]->Helpers.toObjectKeyValue->expect->toBe(test["toObjectKeyValue"])
  })

  testAll("object type", testExamples, test => {
    test["input"]->Helpers.toObjectType->expect->toBe(test["toObjectType"])
  })
})
