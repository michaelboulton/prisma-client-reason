"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
function relatedTo(relationName) {
    var regExp = new RegExp("([A-Za-z]+?)To([A-Za-z]+)");
    var split = relationName.match(regExp);
    if (!split) {
        throw new Error('Bad related');
    }
    return split;
}
exports.toPrimitiveType = function (_a) {
    var type = _a.type, relationName = _a.relationName, isList = _a.isList;
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
                    var r = relatedTo(relationName)[1];
                    if (r == type) {
                        return r + ".WhereUniqueInput.t";
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
    if (field.isList && field.relationName !== undefined) {
        return exports.toObjectKey(field) + ": {connect: " + exports.toObjectKey(field) + "}";
    }
    return exports.toObjectKey(field) + ": " + exports.toObjectKey(field);
};
var needsAnnotation = function (field) {
    var re_field_name = exports.toObjectKey(field);
    return (re_field_name != field.name);
};
exports.toObjectType = function (field) {
    var type;
    if (!field.isRequired) {
        if (field.relationName === undefined) {
            type = 'option<bool>';
        }
        else {
            console.log(({
                name: field.name,
                relationName: field.relationName,
                type: field.type,
                isList: field.isList
            }));
            var useConnect = void 0;
            if (field.isList) {
                useConnect = relatedTo(field.relationName)[1];
            }
            else {
                useConnect = relatedTo(field.relationName)[2];
            }
            type = useConnect + ".WhereUniqueInput.connectOne";
        }
    }
    else {
        type = exports.toPrimitiveType(field);
        if (field.relationName !== undefined) {
            var r = relatedTo(field.relationName)[1];
            type = r + ".WhereUniqueInput.t";
            if (field.isList) {
                type = type.replace(/\.t$/, '.connectMany');
            }
            else {
                type = type.replace(/\.t$/, '.connectOne');
            }
        }
        else {
            if (field.isList) {
                type = "array<" + type + ">";
            }
        }
    }
    var key = exports.toObjectKey(field);
    if (needsAnnotation(field)) {
        key = "@as(\"" + field.name + "\") " + key;
    }
    return key + ": " + type;
};
exports.toNamedArgumentType = function (field) {
    var type;
    if (field.relationName !== undefined && field.type == 'Boolean') {
        type = 'bool';
    }
    else {
        type = exports.toPrimitiveType(field);
        if (field.isList) {
            type = "array<" + type + ">";
        }
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