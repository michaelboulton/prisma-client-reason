"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
exports.toPrimitiveType = function (type, relation) {
    switch (type) {
        case 'Int':
            return 'int';
        case 'Float':
            return 'float';
        case 'String':
            return 'string';
        case 'Boolean':
            return 'bool';
        case 'DateTime':
            return 'string';
        default:
            if (type == "FindMany" && typeof relation !== "undefined") {
                var stripped = relation.match(/([A-Z][a-z]+)/);
                if (!stripped) {
                    throw new Error("empty relation");
                }
                return "Externals." + stripped[0] + "." + type + ".t";
            }
            return type + ".t";
    }
};
exports.toObjectKey = function (field) {
    return "" + lodash_1.camelCase(field.name);
};
exports.toObjectKeyValue = function (field) {
    return exports.toObjectKey(field) + ": " + exports.toObjectKey(field);
};
exports.toObjectType = function (field) {
    var type = exports.toPrimitiveType(field.type, field.relationName);
    if (field.isList) {
        type = "list<" + type + ">";
    }
    if (!field.isRequired) {
        type = "option<" + type + ">";
    }
    return exports.toObjectKey(field) + ": " + type;
};
exports.toNamedArgumentType = function (field) {
    var type = exports.toPrimitiveType(field.type, field.relationName);
    if (field.isList) {
        type = "list<" + type + ">";
    }
    if (!field.isRequired) {
        type = type + "=?";
    }
    return "~" + exports.toObjectKey(field) + ": " + type;
};
exports.toNamedArgument = function (field) {
    if (!field.isRequired) {
        return "~" + exports.toObjectKey(field) + "=?";
    }
    var type = exports.toPrimitiveType(field.type, field.relationName);
    if (field.isList) {
        type = "list<" + type + ">";
    }
    return "~" + exports.toObjectKey(field) + ": " + type;
};
//# sourceMappingURL=helpers.js.map