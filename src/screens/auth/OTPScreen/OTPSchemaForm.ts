import { z } from 'zod';

export const OTPFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email',
    }),
  code: z
    .string({
      required_error: 'Code is required',
    })
    .min(6, {
      message: 'Code must have 6 characters',
    }),
});

export type OTPFormSchemaTypes = z.infer<typeof OTPFormSchema>;

export const DEFAULT_OTP_FORM_VALUES: OTPFormSchemaTypes = {
  email: '',
  code: '',
};
