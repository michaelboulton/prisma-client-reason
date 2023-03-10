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
            if (type == 'FindMany' && typeof relation !== 'undefined') {
                var stripped = relation.match(/([A-Z][a-z]+)/);
                if (!stripped) {
                    throw new Error('empty relation');
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
var needsAnnotation = function (field) {
    var re_field_name = exports.toObjectKey(field);
    return (re_field_name != field.name);
};
exports.toObjectType = function (field) {
    var type = exports.toPrimitiveType(field.type, field.relationName);
    if (field.isList) {
        type = "array<" + type + ">";
    }
    if (!field.isRequired || field.relationName !== undefined) {
        type = "option<" + type + ">";
    }
    var key = exports.toObjectKey(field);
    if (needsAnnotation(field)) {
        key = "@as(\"" + field.name + "\") " + key;
    }
    return key + ": " + type;
};
exports.toNamedArgumentType = function (field) {
    var type = exports.toPrimitiveType(field.type, field.relationName);
    if (field.isList) {
        type = "array<" + type + ">";
    }
    if (!field.isRequired || field.relationName !== undefined) {
        type = type + "=?";
    }
    return "~" + exports.toObjectKey(field) + ": " + type;
};
exports.toNamedArgument = function (field) {
    if (!field.isRequired || field.relationName !== undefined) {
        return "~" + exports.toObjectKey(field) + "=?";
    }
    var type = exports.toPrimitiveType(field.type, field.relationName);
    if (field.isList) {
        type = "array<" + type + ">";
    }
    return "~" + exports.toObjectKey(field) + ": " + type;
};
//# sourceMappingURL=helpers.js.map