import { z } from 'zod';

const profileStepSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
    })
    .trim()
    .min(4, {
      message: 'Username must be at least 4 characters',
    })
    .max(20, {
      message: 'Username must be at most 20 characters',
    })
    .refine(string => !string.includes(' '), {
      message: 'Username cannot contain spaces',
    }),
  avatar: z.object({
    icon: z.string(),
    color: z.string(),
  }),
});

export const SignUpFormSchema = z.object({
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
    })
    .refine(string => /[A-Z]/.test(string), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine(string => /[a-z]/.test(string), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine(string => /[0-9]/.test(string), {
      message: 'Password must contain at least one number',
    })
    .refine(string => /[!@#$%^&*(),.?":{}|<>]/.test(string), {
      message: 'Password must contain at least one special character',
    }),
  profile: profileStepSchema,
});

export type SignUpFormSchemaTypes = z.infer<typeof SignUpFormSchema>;

export const DEFAULT_SIGNUP_FORM_VALUES: SignUpFormSchemaTypes = {
  email: '',
  password: '',
  profile: {
    username: '',
    avatar: {
      color: '',
      icon: '',
    },
  },
};
