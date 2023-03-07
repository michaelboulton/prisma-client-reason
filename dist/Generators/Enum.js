"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var common_tags_1 = require("common-tags");
var lodash_1 = require("lodash");
var EnumGenerator = (function () {
    function EnumGenerator(enum_) {
        var _this = this;
        this.generate = function () {
            var makeValue = function (enumValue) {
                return "| " + lodash_1.upperFirst(lodash_1.camelCase(enumValue));
            };
            return common_tags_1.codeBlock(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      module ", " = {\n        type t = \n        ", ";\n      };\n    "], ["\n      module ", " = {\n        type t = \n        ", ";\n      };\n    "])), _this["enum"].name, _this["enum"].values.map(makeValue).join('\n'));
        };
        this["enum"] = enum_;
    }
    return EnumGenerator;
}());
exports["default"] = EnumGenerator;
var templateObject_1;
//# sourceMappingURL=Enum.js.map