import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10).max(5000),
  language: z.string().default('am'),
})

export type ContactFormData = z.infer<typeof contactSchema>