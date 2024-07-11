import { generateAvatarComposition } from '@utils';
import { z } from 'zod';

const profileStepSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: 'Username must be at least 4 characters',
    })
    .max(20, {
      message: 'Username must be at most 20 characters',
    }),
})

const signUpStepSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
})

const avatarStepSchema = z.object({
  id: z.string(),
  color: z.string(),
  icon: z.string(),
})

const OTPSStepchema = z.object({
  otp: z.string().length(4),
})

export const OnboardingFormSchema = z.object({
  profileStep: profileStepSchema,
  signUpStep: signUpStepSchema,
  avatarStep: avatarStepSchema,
  OTPStep: OTPSStepchema
});

export type OnboardingFormSchemaTypes = z.infer<typeof OnboardingFormSchema>;

export const DEFAULT_ONBOARDING_FORM_VALUES: OnboardingFormSchemaTypes = {
  avatarStep: generateAvatarComposition(),
  profileStep: {
    username: '',
  },
  signUpStep: {
    email: '',
    password: '',
  },
  OTPStep: {
    otp: '',
  }
};
