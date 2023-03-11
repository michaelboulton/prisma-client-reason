// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/rescript-jest/src/jest.mjs";
import * as Helpers from "../src/helpers.mjs";

function toField(kindOpt, nameOpt, isRequiredOpt, isListOpt, isUniqueOpt, type_Opt, param) {
  var kind = kindOpt !== undefined ? kindOpt : "object";
  var name = nameOpt !== undefined ? nameOpt : "ExampleName";
  var isRequired = isRequiredOpt !== undefined ? isRequiredOpt : false;
  var isList = isListOpt !== undefined ? isListOpt : false;
  var isUnique = isUniqueOpt !== undefined ? isUniqueOpt : false;
  var type_ = type_Opt !== undefined ? type_Opt : "ExampleType";
  return {
          kind: kind,
          name: name,
          isRequired: isRequired,
          isList: isList,
          isUnique: isUnique,
          type: type_
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
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.toObjectKey(toField(undefined, test.input, undefined, undefined, undefined, undefined, undefined))), test.expected);
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
                return Jest.Expect.toBe(Jest.Expect.expect(Helpers.annotation(toField(undefined, test.input, undefined, undefined, undefined, undefined, undefined))), test.maybeExpected);
              }));
      }));

export {
  toField ,
}
/*  Not a pure module */
