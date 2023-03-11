"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var common_tags_1 = require("common-tags");
var ExternalsGenerator = (function () {
    function ExternalsGenerator(models) {
        var _this = this;
        this.make = function () {
            return (0, common_tags_1.codeBlock)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @module(\"@prisma/client\") @new\n      external make: unit => prismaClient = \"PrismaClient\";\n    "], ["\n      @module(\"@prisma/client\") @new\n      external make: unit => prismaClient = \"PrismaClient\";\n    "])));
        };
        this.connect = function () {
            return (0, common_tags_1.codeBlock)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      @send\n      external connect: (prismaClient) => promise<unit> = \"connect\";\n    "], ["\n      @send\n      external connect: (prismaClient) => promise<unit> = \"connect\";\n    "])));
        };
        this.disconnect = function () {
            return (0, common_tags_1.codeBlock)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      @send\n      external disconnect: (prismaClient) => promise<unit> = \"disconnect\";\n    "], ["\n      @send\n      external disconnect: (prismaClient) => promise<unit> = \"disconnect\";\n    "])));
        };
        this.findOne = function (model) {
            var hasRelations = model.fields.some(function (field) { return field.kind === 'object'; });
            return (0, common_tags_1.codeBlock)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      module FindOne: {\n        type t = {\n          select?: option<", ".Select.t>,\n          ", "\n          where: ", ".WhereUniqueInput.t\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<Js.Nullable.t<", ".t>> = \"findFirst\";\n      };\n    "], ["\n      module FindOne: {\n        type t = {\n          select?: option<", ".Select.t>,\n          ", "\n          where: ", ".WhereUniqueInput.t\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<Js.Nullable.t<", ".t>> = \"findFirst\";\n      };\n    "])), model.name, hasRelations ? "include_?: option<".concat(model.name, ".Include.t>,") : '', model.name, model.name.toLowerCase(), model.name);
        };
        this.findMany = function (model) {
            var hasRelations = model.fields.some(function (field) { return field.kind === 'object'; });
            return (0, common_tags_1.codeBlock)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      module FindMany: {\n        type t = {\n          select: option<", ".Select.t>,\n          ", "\n          where: option<", ".WhereInput.t>,\n          skip: option<int>,\n          after: option<", ".WhereUniqueInput.t>,\n          before: option<", ".WhereUniqueInput.t>,\n          first: option<int>,\n          last: option<int>,\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<array<", ".t>> = \"findMany\";\n      };\n    "], ["\n      module FindMany: {\n        type t = {\n          select: option<", ".Select.t>,\n          ", "\n          where: option<", ".WhereInput.t>,\n          skip: option<int>,\n          after: option<", ".WhereUniqueInput.t>,\n          before: option<", ".WhereUniqueInput.t>,\n          first: option<int>,\n          last: option<int>,\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<array<", ".t>> = \"findMany\";\n      };\n    "])), model.name, hasRelations ? "include_: option<".concat(model.name, ".Include.t>,") : '', model.name, model.name, model.name, model.name.toLowerCase(), model.name);
        };
        this.create = function (model) {
            var hasRelations = model.fields.some(function (field) { return field.kind === 'object'; });
            return (0, common_tags_1.codeBlock)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      module Create: {\n        type t = {\n          select?: option<", ".Select.t>,\n          ", "\n          data: ", ".CreateInput.t\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<", ".t> = \"create\";\n      };\n    "], ["\n      module Create: {\n        type t = {\n          select?: option<", ".Select.t>,\n          ", "\n          data: ", ".CreateInput.t\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<", ".t> = \"create\";\n      };\n    "])), model.name, hasRelations ? "include_?: option<".concat(model.name, ".Include.t>,") : '', model.name, model.name.toLowerCase(), model.name);
        };
        this.update = function (model) {
            return (0, common_tags_1.codeBlock)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      \n    "], ["\n      \n    "])));
        };
        this.updateMany = function (model) {
            return (0, common_tags_1.codeBlock)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      \n    "], ["\n      \n    "])));
        };
        this.upsert = function (model) {
            return (0, common_tags_1.codeBlock)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      \n    "], ["\n      \n    "])));
        };
        this["delete"] = function (model) {
            return (0, common_tags_1.codeBlock)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      \n    "], ["\n      \n    "])));
        };
        this.deleteMany = function (model) {
            return (0, common_tags_1.codeBlock)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      module DeleteMany: {\n        type t = {\n          where?: option<", ".WhereInput.t>,\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<batchPayload> = \"deleteMany\";\n      };\n    "], ["\n      module DeleteMany: {\n        type t = {\n          where?: option<", ".WhereInput.t>,\n        };\n\n        @send @scope(\"", "\")\n        external make: (prismaClient, t) =>\n          promise<batchPayload> = \"deleteMany\";\n      };\n    "])), model.name, model.name.toLowerCase());
        };
        this.count = function (model) {
            return (0, common_tags_1.codeBlock)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      \n    "], ["\n      \n    "])));
        };
        this.generate = function () {
            return (0, common_tags_1.codeBlock)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n        and Externals: {\n          ", "\n          ", "\n          ", "\n          ", "\n        } = Externals\n      "], ["\n        and Externals: {\n          ", "\n          ", "\n          ", "\n          ", "\n        } = Externals\n      "])), _this.make(), _this.connect(), _this.disconnect(), _this.models
                .map(function (model) {
                return (0, common_tags_1.codeBlock)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n                module ", ": {\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                }\n              "], ["\n                module ", ": {\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                  ", "\n                }\n              "])), model.name, _this.findOne(model), _this.findMany(model), _this.update(model), _this.updateMany(model), _this.upsert(model), _this["delete"](model), _this.deleteMany(model), _this.count(model), _this.create(model));
            })
                .join('\n\n'));
        };
        this.models = models;
    }
    return ExternalsGenerator;
}());
exports["default"] = ExternalsGenerator;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=index.js.map