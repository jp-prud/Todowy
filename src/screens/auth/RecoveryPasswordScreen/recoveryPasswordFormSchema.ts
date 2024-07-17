import { z } from 'zod';

export const ResetPasswordFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email',
    }),
  code: z.string({
    required_error: 'Code is required',
  }).min(6, { message: 'Code must be 6 characters' }),
  newPassword: z.string({
    required_error: 'Password is required',
  })
  .min(10, {
    message: 'Password must be at least 10 characters',
  })
  .refine((string) => /[A-Z]/.test(string), {
    message: 'Password must contain at least one uppercase letter',
  })
  .refine((string) => /[a-z]/.test(string), {
    message: 'Password must contain at least one lowercase letter',
  })
  .refine((string) => /[0-9]/.test(string), {
    message: 'Password must contain at least one number',
  })
  .refine((string) => /[!@#$%^&*(),.?":{}|<>]/.test(string), {
    message: 'Password must contain at least one special character',
  }),
});

export type ResetPasswordFormSchemaTypes = z.infer<typeof ResetPasswordFormSchema>;

export const DEFAULT_RESET_PASSWORD_FORM_VALUES: ResetPasswordFormSchemaTypes = {
  email: '',
  code: '',
  newPassword: '',
};
