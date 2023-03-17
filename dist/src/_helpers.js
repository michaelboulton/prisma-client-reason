import { camelCase } from 'lodash';
function relatedTo(relationName) {
    var regExp = new RegExp("([A-Za-z]+?)To([A-Za-z]+)");
    var split = relationName.match(regExp);
    if (!split) {
        throw new Error('Bad related');
    }
    return split;
}
export var toPrimitiveType = function (_a) {
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
                    return "Externals.".concat(stripped[0], ".").concat(type, ".t");
                }
                else {
                    var r = relatedTo(relationName)[1];
                    if (r == type) {
                        return "".concat(r, ".WhereUniqueInput.t");
                    }
                    else {
                        return "".concat(type, ".WhereUniqueInput.t");
                    }
                }
            }
            return "".concat(type, ".t");
    }
};
export var toObjectKey = function (field) {
    return "".concat(camelCase(field.name));
};
export var toObjectKeyValue = function (field) {
    if (field.isList && field.relationName !== undefined && field.isRequired) {
    }
    return "".concat(toObjectKey(field), ": ").concat(toObjectKey(field));
};
var needsAnnotation = function (field) {
    var re_field_name = toObjectKey(field);
    return (re_field_name != field.name);
};
export var toObjectType = function (field) {
    var type = toPrimitiveType(field);
    if (field.relationName === undefined) {
        if (field.isList) {
            type = "array<".concat(type, ">");
        }
        if (!field.isRequired) {
            type = "option<".concat(type, ">");
        }
    }
    else {
        if (!field.isRequired || field.type == 'FindMany') {
            type = "option<bool>";
        }
        else if (field.isList) {
            console.log(({
                name: field.name,
                relationName: field.relationName,
                type: field.type,
                isList: field.isList,
                required: field.isRequired,
                relationToFields: field.relationToFields
            }));
            type = "option<".concat(relatedTo(field.relationName)[1], ".WhereUniqueInput.connectMany>");
        }
        else {
            type = "".concat(relatedTo(field.relationName)[2], ".WhereUniqueInput.connectOne");
        }
    }
    var key = toObjectKey(field);
    if (needsAnnotation(field)) {
        key = "@as(\"".concat(field.name, "\") ").concat(key);
    }
    return "".concat(key, ": ").concat(type);
};
export var toNamedArgumentType = function (field) {
    var type = toPrimitiveType(field);
    if (field.relationName === undefined) {
        if (field.isList) {
            type = "array<".concat(type, ">");
        }
        if (!field.isRequired) {
            type = "".concat(type, "=?");
        }
    }
    else {
        if (field.type == 'Boolean') {
            type = 'bool';
        }
        if (!field.isRequired) {
            type = "".concat(type, "=?");
        }
    }
    return "~".concat(toObjectKey(field), ": ").concat(type);
};
export var toNamedArgument = function (field) {
    if (!field.isRequired) {
        return "~".concat(toObjectKey(field), "=?");
    }
    var type = toPrimitiveType(field);
    if (field.isList) {
        if (field.relationName === undefined) {
            type = "array<".concat(type, ">");
        }
        else {
            return "~".concat(toObjectKey(field), "=?");
        }
    }
    return "~".concat(toObjectKey(field), ": ").concat(type);
};
//# sourceMappingURL=_helpers.js.map