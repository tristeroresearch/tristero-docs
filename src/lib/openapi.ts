import { createOpenAPI } from 'fumadocs-openapi/server';

export const openapi = createOpenAPI({
  input: ['./openapi.json'],
});

export const tristeroOpenapi = createOpenAPI({
  input: ['./tristero-openapi.json'],
});
