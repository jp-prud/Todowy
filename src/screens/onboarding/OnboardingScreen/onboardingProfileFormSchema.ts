import { generateAvatarComposition } from '@utils';
import { z } from 'zod';

export const OnboardingFormSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: 'Username must be at least 4 characters',
    })
    .max(20, {
      message: 'Username must be at most 20 characters',
    }),
  avatar: z.object(
    {
      id: z.string(),
      color: z.string(),
      icon: z.string(),
    },
    {
      required_error: 'You must choose an avatar',
    },
  ),
});

export type OnboardingFormSchemaTypes = z.infer<typeof OnboardingFormSchema>;

export const DEFAULT_ONBOARDING_FORM_VALUES: OnboardingFormSchemaTypes = {
  username: '',
  avatar: generateAvatarComposition(),
};
