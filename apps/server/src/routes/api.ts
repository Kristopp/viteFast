import { FastifyInstance } from 'fastify';
import { HelloResponseSchema } from '../schemas/common.js';

export default async function apiRoutes(fastify: FastifyInstance) {
  // Hello endpoint with TypeBox schema validation
  fastify.get('/hello', {
    schema: {
      response: {
        200: HelloResponseSchema,
      },
    },
  }, async () => {
    return {
      message: 'Hello from ViteFast AI Agent Template!',
      timestamp: new Date().toISOString(),
    };
  });

  // Example POST endpoint
  fastify.post('/echo', async (request) => {
    return {
      echo: request.body,
      timestamp: new Date().toISOString(),
    };
  });
}
