import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { HealthResponseSchema } from './schemas/common.js';
import apiRoutes from './routes/api.js';

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
  },
});

// Register CORS
await fastify.register(cors, {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
});

// Health check route
fastify.get('/health', {
  schema: {
    response: {
      200: HealthResponseSchema,
    },
  },
}, async () => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Register API routes
await fastify.register(apiRoutes, { prefix: '/api' });

// Start server
const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3001;
    const host = process.env.HOST || '0.0.0.0';

    await fastify.listen({ port, host });
    console.log(`🚀 Server running at http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
