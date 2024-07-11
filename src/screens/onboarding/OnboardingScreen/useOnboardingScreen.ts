import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useSettings } from '@useCases';
import {
  DEFAULT_ONBOARDING_FORM_VALUES,
  OnboardingFormSchema,
  OnboardingFormSchemaTypes,
} from './onboardingProfileFormSchema';

export function useOnboardingScreen() {
  const { toggleOnboardingStatus } = useSettings()
  // const { saveCredentials } = useAuthContext();

  const [renderWelcomeStep, setRenderWelcomeStep] = useState(true);

  const formMethods = useForm<OnboardingFormSchemaTypes>({
    defaultValues: DEFAULT_ONBOARDING_FORM_VALUES,
    resolver: zodResolver(OnboardingFormSchema),
    mode: 'onChange',
  });

  function handlePressFinishOnboarding() {
    toggleOnboardingStatus();
  }

  function handlePressStartOnboarding() {
    setRenderWelcomeStep(false);
  }

  return {
    renderStarterStep: renderWelcomeStep,
    handlePressStartOnboarding,
    handlePressFinishOnboarding,
    formMethods,
  };
}
