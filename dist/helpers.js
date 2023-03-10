"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
exports.toPrimitiveType = function (_a) {
    var type = _a.type, relationName = _a.relationName;
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
            if (relationName !== undefined) {
                if (type == 'FindMany') {
                    var stripped = relationName.match(/([A-Z][a-z]+)/);
                    if (!stripped) {
                        throw new Error('empty relation');
                    }
                    return "Externals." + stripped[0] + "." + type + ".t";
                }
                else {
                    console.log("type: " + type + ", relation name: " + relationName);
                    var regExp = new RegExp("([A-Za-z]+?)To([A-Za-z]+)");
                    if (type == 'Customer')
                        console.log(regExp);
                    var split = relationName.match(regExp);
                    if (!split) {
                        throw new Error('Bad related');
                    }
                    if (type == 'Customer')
                        console.log(type);
                    if (type == 'Customer')
                        console.log(split);
                    if (split[1] == type) {
                        return split[1] + ".WhereUniqueInput.t";
                    }
                    else {
                        return type + ".WhereUniqueInput.t";
                    }
                }
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
    var type = exports.toPrimitiveType(field);
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
    var type = exports.toPrimitiveType(field);
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
    var type = exports.toPrimitiveType(field);
    if (field.isList) {
        type = "array<" + type + ">";
    }
    return "~" + exports.toObjectKey(field) + ": " + type;
};
//# sourceMappingURL=helpers.js.map