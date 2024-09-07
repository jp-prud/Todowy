import { env } from '@types';
import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(10, {
      message: 'Password must be at least 10 characters',
    }),
});

export type SignInFormSchemaTypes = z.infer<typeof SignInFormSchema>;

export const DEFAULT_SIGNIN_FORM_VALUES: SignInFormSchemaTypes =
  env.ENV === 'development'
    ? { email: 'jpprud.contato@gmail.com', password: 'A3!bX@9eW#' }
    : { email: '', password: '' };
