import { bucket } from './schemas/bucket';
import { card } from './schemas/card';
import { benefit } from './schemas/benefit';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bucket, card, benefit]
};
