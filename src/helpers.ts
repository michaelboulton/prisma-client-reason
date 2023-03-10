import { DMMF } from '@prisma/generator-helper';
import { upperFirst, camelCase } from 'lodash';

export const toPrimitiveType = (type: string, relation?: string) => {
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
        const stripped = relation.match(/([A-Z][a-z]+)/);
        if (!stripped) {
          // FIXME
          throw new Error('empty relation');
        }
        return `Externals.${stripped[0]}.${type}.t`;
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
  let type = toPrimitiveType(field.type, field.relationName);

  if (field.isList) {
    type = `list<${type}>`;
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
  let type = toPrimitiveType(field.type, field.relationName);

  if (field.isList) {
    type = `list<${type}>`;
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

  let type = toPrimitiveType(field.type, field.relationName);

  if (field.isList) {
    type = `list<${type}>`;
  }

  return `~${toObjectKey(field)}: ${type}`;
};
