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
  ~name: string="ExampleName",
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

describe("argument printers without relations", () => {
  let testExamples = Array.to_list([
    {
      // Required list => array type
      "input": toField(~isList=true, ~isRequired=true, ()),
      "namedArgument": "~exampleName=?",
      "toNamedArgumentType": "~exampleName: array<int>",
      "toObjectKeyValue": "exampleName: exampleName",
    },
    {
      // Not required, but a list => still implicit type
      "input": toField(~isList=false, ~isRequired=true, ()),
      "namedArgument": "~exampleName: int",
      "toNamedArgumentType": "~exampleName: int",
      "toObjectKeyValue": "exampleName: exampleName",
    },
    {
      // Not required => implicit type
      "input": toField(~isList=false, ~isRequired=false, ()),
      "namedArgument": "~exampleName=?",
      "toNamedArgumentType": "~exampleName: array<int>=?",
      "toObjectKeyValue": "exampleName: exampleName",
    },
    {
      // Required list => array type
      "input": toField(~isList=true, ~isRequired=false, ()),
      "namedArgument": "~exampleName=?",
      "toNamedArgumentType": "~exampleName: int=?",
      "toObjectKeyValue": "exampleName: exampleName",
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
})

describe("argument printers with relations", () => {
  let testExamples = Array.to_list([
    {
      // Relation but not required => optional still
      "input": toField(
        ~isList=true,
        ~isRequired=false,
        ~name="Cool",
        ~type_="One",
        ~relationName="CoolToOne",
        (),
      ),
      "type": "~cool=?",
    },
    {
      // Relation and required => array
      // FIXME this logic is a bit wrong
      "input": toField(
        ~isList=true,
        ~isRequired=true,
        ~name="Cool",
        ~type_="One",
        ~relationName="CoolToOne",
        (),
      ),
      "type": "~cool: array<One.WhereUniqueInput.t>",
    },
  ])

  testAll("named argument", testExamples, test => {
    test["input"]->Helpers.toNamedArgument->expect->toBe(test["type"])
  })
})
