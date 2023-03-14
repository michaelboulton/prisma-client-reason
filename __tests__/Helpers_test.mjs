// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/rescript-jest/src/jest.mjs";
import * as $$Array from "rescript/lib/es6/array.js";
import * as Helpers from "../src/helpers.mjs";

function toField(kindOpt, nameOpt, isRequiredOpt, isListOpt, isUniqueOpt, type_Opt, relationName, param) {
  var kind = kindOpt !== undefined ? kindOpt : "object";
  var name = nameOpt !== undefined ? nameOpt : "exampleName";
  var isRequired = isRequiredOpt !== undefined ? isRequiredOpt : false;
  var isList = isListOpt !== undefined ? isListOpt : false;
  var isUnique = isUniqueOpt !== undefined ? isUniqueOpt : false;
  var type_ = type_Opt !== undefined ? type_Opt : "Int";
  return {
          kind: kind,
          name: name,
          isRequired: isRequired,
          isList: isList,
          isUnique: isUnique,
          type: type_,
          relationName: relationName
        };
}

Jest.describe("helpers", (function (param) {
        Jest.testAll("camelcasing", {
              hd: {
                input: "Hello",
                expected: "hello"
              },
              tl: {
                hd: {
                  input: "hello",
                  expected: "hello"
                },
                tl: {
                  hd: {
                    input: "AnotherThing",
                    expected: "anotherThing"
                  },
                  tl: /* [] */0
                }
              }
            }, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toObjectKeyName(toField(undefined, test.input, undefined, undefined, undefined, undefined, undefined, undefined))), test.expected);
              }));
        Jest.testAll("annotation", {
              hd: {
                input: "Hello",
                maybeExpected: "@as(\"Hello\")"
              },
              tl: {
                hd: {
                  input: "hello",
                  maybeExpected: undefined
                },
                tl: /* [] */0
              }
            }, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.annotation(toField(undefined, test.input, undefined, undefined, undefined, undefined, undefined, undefined))), test.maybeExpected);
              }));
      }));

Jest.describe("argument printers without relations", (function (param) {
        var testExamples_0 = {
          input: toField(undefined, undefined, true, false, undefined, undefined, undefined, undefined),
          namedArgument: "~exampleName: int",
          toNamedArgumentType: "~exampleName: int",
          toObjectKeyValue: "exampleName: exampleName",
          toObjectType: "exampleName: int"
        };
        var testExamples_1 = {
          hd: {
            input: toField(undefined, undefined, true, true, undefined, undefined, undefined, undefined),
            namedArgument: "~exampleName: array<int>",
            toNamedArgumentType: "~exampleName: array<int>",
            toObjectKeyValue: "exampleName: exampleName",
            toObjectType: "exampleName: array<int>"
          },
          tl: {
            hd: {
              input: toField(undefined, undefined, false, false, undefined, undefined, undefined, undefined),
              namedArgument: "~exampleName=?",
              toNamedArgumentType: "~exampleName: int=?",
              toObjectKeyValue: "?exampleName",
              toObjectType: "exampleName?: int"
            },
            tl: {
              hd: {
                input: toField(undefined, undefined, false, true, undefined, undefined, undefined, undefined),
                namedArgument: "~exampleName=?",
                toNamedArgumentType: "~exampleName: array<int>=?",
                toObjectKeyValue: "?exampleName",
                toObjectType: "exampleName?: array<int>"
              },
              tl: {
                hd: {
                  input: toField(undefined, undefined, false, false, undefined, "Boolean", undefined, undefined),
                  namedArgument: "~exampleName=?",
                  toNamedArgumentType: "~exampleName: bool=?",
                  toObjectKeyValue: "?exampleName",
                  toObjectType: "exampleName?: bool"
                },
                tl: {
                  hd: {
                    input: toField(undefined, undefined, false, true, undefined, "Boolean", undefined, undefined),
                    namedArgument: "~exampleName=?",
                    toNamedArgumentType: "~exampleName: array<bool>=?",
                    toObjectKeyValue: "?exampleName",
                    toObjectType: "exampleName?: array<bool>"
                  },
                  tl: /* [] */0
                }
              }
            }
          }
        };
        var testExamples = {
          hd: testExamples_0,
          tl: testExamples_1
        };
        Jest.testAllJson("named argument", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toNamedArgument(test.input)), test.namedArgument);
              }));
        Jest.testAllJson("named argument type", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toNamedArgumentType(test.input)), test.toNamedArgumentType);
              }));
        Jest.testAllJson("object key value", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toObjectKeyValue(test.input)), test.toObjectKeyValue);
              }));
        Jest.testAllJson("object type", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toObjectType(test.input)), test.toObjectType);
              }));
      }));

Jest.describe("argument printers with relations", (function (param) {
        var testExamples = $$Array.to_list([{
                input: toField(undefined, "Cool", true, false, undefined, "One", "CoolToOne", undefined),
                namedArgument: "~cool: One.WhereUniqueInput.t",
                toNamedArgumentType: "~cool: One.WhereUniqueInput.t",
                toObjectKeyValue: "cool: cool",
                toObjectType: "@as(\"Cool\") cool: One.WhereUniqueInput.t"
              }]);
        Jest.testAllJson("named argument", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toNamedArgument(test.input)), test.namedArgument);
              }));
        Jest.testAllJson("named argument type", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toNamedArgumentType(test.input)), test.toNamedArgumentType);
              }));
        Jest.testAllJson("object key value", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toObjectKeyValue(test.input)), test.toObjectKeyValue);
              }));
        Jest.testAllJson("object type", testExamples, (function (test) {
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toObjectType(test.input)), test.toObjectType);
              }));
      }));

export {
  toField ,
}
/*  Not a pure module */
