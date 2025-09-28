import { z } from 'zod'
import BaseSchema from '../entity/base'

// Schema
export const sessionSchema = z.object({
  user_id: z.uuid({ message: 'user_id must be a valid UUID' }),
  token: z
    .string('token is required')
    .min(3, { error: 'token must be at least 3 characters long' }),
  ip_address: z.string('ip_address is required').nullable().optional(),
  device: z.string('device is required').nullable().optional(),
  platform: z.string('platform is required').nullable().optional(),
  user_agent: z.string('user_agent is required').nullable().optional(),
  latitude: z.string('latitude is required').nullable().optional(),
  longitude: z.string('longitude is required').nullable().optional(),
})

// Type
export type SessionSchema = z.infer<typeof sessionSchema> & BaseSchema
