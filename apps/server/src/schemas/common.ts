import { Type, Static } from '@sinclair/typebox';
import { z } from 'zod';

// TypeBox schemas for Fastify validation
export const HelloResponseSchema = Type.Object({
  message: Type.String(),
  timestamp: Type.Optional(Type.String()),
});

export const HealthResponseSchema = Type.Object({
  status: Type.String(),
  timestamp: Type.String(),
});

// Zod schemas for additional validation
export const UserInputSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
});

// TypeScript types derived from schemas
export type HelloResponse = Static<typeof HelloResponseSchema>;
export type HealthResponse = Static<typeof HealthResponseSchema>;
export type UserInput = z.infer<typeof UserInputSchema>;
