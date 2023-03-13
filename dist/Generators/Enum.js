var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { codeBlock } from 'common-tags';
import { upperFirst, camelCase } from 'lodash';
var EnumGenerator = (function () {
    function EnumGenerator(enum_) {
        var _this = this;
        this.generate = function () {
            var makeValue = function (enumValue) {
                return "| ".concat(upperFirst(camelCase(enumValue)));
            };
            return codeBlock(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      module ", " = {\n        type t = \n        ", ";\n      };\n    "], ["\n      module ", " = {\n        type t = \n        ", ";\n      };\n    "])), _this["enum"].name, _this["enum"].values.map(makeValue).join('\n'));
        };
        this["enum"] = enum_;
    }
    return EnumGenerator;
}());
export default EnumGenerator;
var templateObject_1;
//# sourceMappingURL=Enum.js.map