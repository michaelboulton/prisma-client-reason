/* TypeScript file generated from helpers.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as helpersBS__Es6Import from './helpers.mjs';
const helpersBS: any = helpersBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type Prisma_fieldKind = "scalar" | "object" | "enum" | "unsupported";

export interface IPrisma_field {
  readonly kind: Prisma_fieldKind; 
  readonly name: string; 
  readonly isRequired: boolean; 
  readonly isList: boolean; 
  readonly isUnique: boolean; 
  readonly type: string; 
  readonly dbNames?: (null | undefined | string[]); 
  readonly relationToFields?: string[]; 
  readonly relationName?: string
};

export const toObjectKeyValue: (field:IPrisma_field) => string = helpersBS.toObjectKeyValue;

export const toNamedArgument: (field:IPrisma_field) => string = helpersBS.toNamedArgument;

export const toNamedArgumentType: (field:IPrisma_field) => string = helpersBS.toNamedArgumentType;

export const toObjectType: (field:IPrisma_field) => string = helpersBS.toObjectType;
