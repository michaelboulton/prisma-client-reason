#!/usr/bin/env node

import { join } from 'path';
// @ts-ignore
import { ensureDir, outputFile } from 'fs-extra/esm';
import { generatorHandler } from '@prisma/generator-helper';

import ExternalsGenerator from './Externals.js';

import ModelGenerator from './Generators/Model.js';
import EnumGenerator from './Generators/Enum.js';

// @ts-ignore
import * as p from '../package.json' assert { type: 'json' };
// @ts-ignore
const clientVersion = p.version;

generatorHandler({
  onManifest() {
    return {
      prettyName: 'Prisma Client ReasonML',
      requiresEngines: ['queryEngine'],
      version: clientVersion,
    };
  },
  onGenerate: async (options) => {
    if (!options.generator.isCustomOutput) {
      console.error('You need to define an output path for the client');
      throw new Error();
    }
    if (!options.generator.config.name) {
      console.error('You need to define a name for the client');
      throw new Error();
    }

    const externals = new ExternalsGenerator(options.dmmf.datamodel.models);

    await ensureDir(options.generator.output.value);
    await outputFile(
      join(
        options.generator.output.value,
        `${options.generator.config.name}.res`,
      ),
      // language=Rescript
      `
        type prismaClient;

        type batchPayload = {
          // https://rescript-lang.org/docs/manual/latest/shared-data-types
          count: float,
        }

        /* ENUMS */
        ${options.dmmf.schema.enumTypes.prisma
          .map((type) => new EnumGenerator(type).generate())
          .join('\n\n')}

        module rec ${options.dmmf.datamodel.models
          .map((model) => new ModelGenerator(model).generate())
          .join('\n and \n')}

        ${externals.generate()}

        let make = Externals.make;
        let connect = Externals.connect;
        let disconnect = Externals.disconnect;
      `,
    );

    return true;
  },
});
