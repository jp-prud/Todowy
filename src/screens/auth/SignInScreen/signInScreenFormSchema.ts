import { z } from 'zod';

export const SignInFormSchema = z.object({
  name: z.string(),
  // password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export type SignInFormSchemaTypes = z.infer<typeof SignInFormSchema>;
