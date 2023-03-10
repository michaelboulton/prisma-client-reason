import { DMMF } from '@prisma/generator-helper';
import { upperFirst, camelCase } from 'lodash';

export const toPrimitiveType = ({ type, relationName }: DMMF.Field) => {
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
          const stripped = relationName.match(/([A-Z][a-z]+)/);
          if (!stripped) {
            throw new Error('empty relation');
          }

          return `Externals.${stripped[0]}.${type}.t`;
        } else {
          let regExp = new RegExp(`([A-Za-z]+?)To([A-Za-z]+)`);
          const split = relationName.match(regExp);
          if (!split) {
            throw new Error('Bad related');
          }

          if (split[1] == type) {
            return `${split[1]}.WhereUniqueInput.t`;
          } else {
            return `${type}.WhereUniqueInput.t`;
          }
        }
      }

      return `${type}.t`;
  }
};

export const toObjectKey = (field: DMMF.Field) => {
  return `${camelCase(field.name)}`;
};

export const toObjectKeyValue = (field: DMMF.Field) => {
  return `${toObjectKey(field)}: ${toObjectKey(field)}`;
};

/**
 * Returns if the rescript field name is different from the real name and will need an annotation
 *
 * @param field Field to introspect
 */
const needsAnnotation = (field: DMMF.Field) => {
  const re_field_name = toObjectKey(field);
  return (re_field_name != field.name);
};

export const toObjectType = (field: DMMF.Field) => {
  let type = toPrimitiveType(field);

  if (field.isList) {
    type = `array<${type}>`;
  }

  if (!field.isRequired || field.relationName !== undefined) {
    type = `option<${type}>`;
  }

  let key = toObjectKey(field);

  if (needsAnnotation(field)) {
    key = `@as("${field.name}") ${key}`;
  }

  return `${key}: ${type}`;
};

export const toNamedArgumentType = (field: DMMF.Field) => {
  let type = toPrimitiveType(field);

  if (field.isList) {
    type = `array<${type}>`;
  }

  if (!field.isRequired || field.relationName !== undefined) {
    type = `${type}=?`;
  }

  return `~${toObjectKey(field)}: ${type}`;
};

export const toNamedArgument = (field: DMMF.Field) => {
  if (!field.isRequired || field.relationName !== undefined) {
    return `~${toObjectKey(field)}=?`;
  }

  let type = toPrimitiveType(field);

  if (field.isList) {
    type = `array<${type}>`;
  }

  return `~${toObjectKey(field)}: ${type}`;
};
