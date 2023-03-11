"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var common_tags_1 = require("common-tags");
var helpers_1 = require("../helpers");
var Inputs_1 = require("./Inputs");
var ModelsGenerator = (function () {
    function ModelsGenerator(model) {
        var _this = this;
        this.base = function (model) {
            return {
                rei: (0, common_tags_1.codeBlock)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        type t = {\n          ", "\n        };\n      "], ["\n        type t = {\n          ", "\n        };\n      "])), model.fields.map(helpers_1.toObjectType).join(',\n')),
                re: (0, common_tags_1.codeBlock)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        type t = {\n          ", "\n        };\n      "], ["\n        type t = {\n          ", "\n        };\n      "])), model.fields.map(helpers_1.toObjectType).join(',\n'))
            };
        };
        this.create = function (model) {
            var hasRelations = model.fields.some(function (field) { return field.kind === 'object'; });
            return {
                rei: (0, common_tags_1.codeBlock)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        let create: (\n          prismaClient,\n          ~select: Select.t=?,\n          ", "\n          ~data: CreateInput.t,\n          unit\n        ) => promise<t>;\n      "], ["\n        let create: (\n          prismaClient,\n          ~select: Select.t=?,\n          ", "\n          ~data: CreateInput.t,\n          unit\n        ) => promise<t>;\n      "])), hasRelations ? '~include_: Include.t=?,' : ''),
                re: (0, common_tags_1.codeBlock)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        let create = (\n          prismaClient,\n          ~select=?,\n          ", "\n          ~data,\n          ()\n        ) => {\n          Externals.", ".Create.make(\n            prismaClient,\n            {\n              select: select,\n              ", "\n              data: data,\n            }\n          );\n        };\n      "], ["\n        let create = (\n          prismaClient,\n          ~select=?,\n          ", "\n          ~data,\n          ()\n        ) => {\n          Externals.", ".Create.make(\n            prismaClient,\n            {\n              select: select,\n              ", "\n              data: data,\n            }\n          );\n        };\n      "])), hasRelations ? '~include_=?,' : '', model.name, hasRelations ? 'include_: include_,' : '')
            };
        };
        this.findMany = function (model) {
            var hasRelations = model.fields.some(function (field) { return field.kind === 'object'; });
            return {
                rei: (0, common_tags_1.codeBlock)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        let findMany: (\n          prismaClient,\n          ~select: Select.t=?,\n          ", "\n          ~where: WhereInput.t=?,\n          ~skip: int=?,\n          ~after: WhereUniqueInput.t=?,\n          ~before: WhereUniqueInput.t=?,\n          ~first: int=?,\n          ~last: int=?,\n          unit\n        ) => promise<array<t>>;\n      "], ["\n        let findMany: (\n          prismaClient,\n          ~select: Select.t=?,\n          ", "\n          ~where: WhereInput.t=?,\n          ~skip: int=?,\n          ~after: WhereUniqueInput.t=?,\n          ~before: WhereUniqueInput.t=?,\n          ~first: int=?,\n          ~last: int=?,\n          unit\n        ) => promise<array<t>>;\n      "])), hasRelations ? '~include_: Include.t=?,' : ''),
                re: (0, common_tags_1.codeBlock)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        let findMany = (\n          prismaClient,\n          ~select=?,\n          ", "\n          ~where=?,\n          // ~orderBy=?,\n          ~skip=?,\n          ~after=?,\n          ~before=?,\n          ~first=?,\n          ~last=?,\n          ()\n        ) => {\n          Externals.", ".FindMany.make(\n            prismaClient,\n            {\n              select: select,\n              ", "\n              where: where,\n              // orderBy: orderBy,\n              skip: skip,\n              after: after,\n              before: before,\n              first: first,\n              last: last,\n            }\n          );\n        };\n      "], ["\n        let findMany = (\n          prismaClient,\n          ~select=?,\n          ", "\n          ~where=?,\n          // ~orderBy=?,\n          ~skip=?,\n          ~after=?,\n          ~before=?,\n          ~first=?,\n          ~last=?,\n          ()\n        ) => {\n          Externals.", ".FindMany.make(\n            prismaClient,\n            {\n              select: select,\n              ", "\n              where: where,\n              // orderBy: orderBy,\n              skip: skip,\n              after: after,\n              before: before,\n              first: first,\n              last: last,\n            }\n          );\n        };\n      "])), hasRelations ? '~include_=?,' : '', model.name, hasRelations ? 'include_: include_,' : '')
            };
        };
        this.generate = function () {
            var model = _this.model;
            var inputsGenerator = new Inputs_1["default"](model);
            var inputs = inputsGenerator.generate();
            return (0, common_tags_1.codeBlock)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      ", " : {\n        ", "\n        ", "\n        ", "\n        ", "\n      } = {\n        ", "\n        ", "\n        ", "\n        ", "\n      }\n    "], ["\n      ", " : {\n        ", "\n        ", "\n        ", "\n        ", "\n      } = {\n        ", "\n        ", "\n        ", "\n        ", "\n      }\n    "])), model.name, _this.base(model).rei, inputs.rei, _this.create(model).rei, _this.findMany(model).rei, _this.base(model).re, inputs.re, _this.create(model).re, _this.findMany(model).re);
        };
        this.model = model;
    }
    return ModelsGenerator;
}());
exports["default"] = ModelsGenerator;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Model.js.map