import { DMMF } from '@prisma/generator-helper';
import { upperFirst, camelCase } from 'lodash';


function relatedTo(relationName: string) {
  let regExp = new RegExp(`([A-Za-z]+?)To([A-Za-z]+)`);
  const split = relationName.match(regExp);
  if (!split) {
    throw new Error('Bad related');
  }

  return split;
}

export const toPrimitiveType = ({ type, relationName, isList }: DMMF.Field) => {
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
          const r = relatedTo(relationName)[1];

          if (r == type) {
            return `${r}.WhereUniqueInput.t`;
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
  if (field.isList && field.relationName !== undefined && field.isRequired) {
    // return `${toObjectKey(field)}: {connect: ${toObjectKey(field)}}`;
  }

  return `${toObjectKey(field)}: ${toObjectKey(field)}`;
};

/**
 * Returns if the rescript field name is different from the real name and will
 * need an annotation
 *
 * @param field Field to introspect
 */
const needsAnnotation = (field: DMMF.Field) => {
  const re_field_name = toObjectKey(field);
  return (re_field_name != field.name);
};

export const toObjectType = (field: DMMF.Field) => {
  let type = toPrimitiveType(field);

  if (field.relationName === undefined) {
    // No relation - do normal checks
    if (field.isList) {
      type = `array<${type}>`;
    }

    if (!field.isRequired) {
      type = `option<${type}>`;
    }
  } else {
    if (!field.isRequired || field.type == 'FindMany') {
      // A not required relation implies a 'select'
      type = `option<bool>`;
    } else if (field.isList) {
      console.log(({
        name: field.name,
        relationName: field.relationName,
        type: field.type,
        isList: field.isList,
        required: field.isRequired,
        relationToFields: field.relationToFields,
      }));
      // list -> one to many
      type = `option<${relatedTo(field.relationName)[1]}.WhereUniqueInput.connectMany>`;
    } else {
      // not a list -> one to one
      type = `${relatedTo(field.relationName)[2]}.WhereUniqueInput.connectOne`;
    }

    /* Field is just a relation to one or more, in this case fall back to this type of struct

    export type OrderCreateNestedManyWithoutCustomerInput = {
      create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
      connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
      createMany?: OrderCreateManyCustomerInputEnvelope
  ->  connect?: Enumerable<OrderWhereUniqueInput>
    }

     */

    /*
    const r = relatedTo(field.relationName)[1];

    type = `${r}.WhereUniqueInput.t`;

    //type = type.replace(/Externals\./, '');
    //type = type.replace(/FindMany\./, '');

    if (field.isList) {
      type = type.replace(/\.t$/, '.connectMany');
    } else {
      type = type.replace(/\.t$/, '.connectOne');
    }

    // if (!field.isRequired || field.relationName !== undefined) {
    //   type = `option<${type}>`;
    // }
     */
  }

  let key = toObjectKey(field);

  if (needsAnnotation(field)) {
    key = `@as("${field.name}") ${key}`;
  }

  return `${key}: ${type}`;
};

export const toNamedArgumentType = (field: DMMF.Field) => {
  let type = toPrimitiveType(field);

  if (field.relationName === undefined) {
    if (field.isList) {
      type = `array<${type}>`;
    }

    if (!field.isRequired) {
      type = `${type}=?`;
    }
  } else {
    if (field.type == 'Boolean') {
      type = 'bool';
    }
    if (!field.isRequired) {
      type = `${type}=?`;
    }
  }

  return `~${toObjectKey(field)}: ${type}`;
};


export const toNamedArgument = (field: DMMF.Field) => {
  if (!field.isRequired) {
    return `~${toObjectKey(field)}=?`;
  }

  let type = toPrimitiveType(field);

  if (field.isList) {
    if (field.relationName === undefined) {
      type = `array<${type}>`;
    } else {
      return `~${toObjectKey(field)}=?`;
    }
  }

  return `~${toObjectKey(field)}: ${type}`;
};
