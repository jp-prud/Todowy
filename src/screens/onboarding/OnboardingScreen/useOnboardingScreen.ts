import { useCallback, useMemo, useState } from 'react';

import { useAuthContext } from '@context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { AvatarListPresetUI } from '@components';
import { AvatarPickerStep, ProfileFormStep, StepProps } from './components';
import {
  DEFAULT_ONBOARDING_FORM_VALUES,
  OnboardingFormSchema,
  OnboardingFormSchemaTypes,
} from './onboardingProfileFormSchema';

export function useOnboardingScreen() {
  const { saveCredentials } = useAuthContext();

  const [renderWelcomeStep, setRenderWelcomeStep] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const formMethods = useForm<OnboardingFormSchemaTypes>({
    defaultValues: DEFAULT_ONBOARDING_FORM_VALUES,
    resolver: zodResolver(OnboardingFormSchema),
    mode: 'onChange',
  });

  const handlePressNextStep = useCallback(
    async (isLast?: boolean) => {
      if (isLast) {
        await saveCredentials({
          username: formMethods.getValues('username'),
          avatar: formMethods.getValues('avatar') as AvatarListPresetUI,
        });

        return;
      }

      setCurrentStep(currentStep + 1);
    },
    [currentStep, saveCredentials, formMethods],
  );

  const handlePressBackStep = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  function handlePressStartOnboarding() {
    setRenderWelcomeStep(false);
  }

  const mappedSteps: StepProps[] = useMemo(() => {
    return [AvatarPickerStep, ProfileFormStep].map((step, index, steps) => ({
      ...step,
      index,
      total: steps.length,
      isLast: index === steps.length - 1,
      onPressNextStep: handlePressNextStep,
      onPressBackStep: handlePressBackStep,
    }));
  }, [handlePressNextStep, handlePressBackStep]);

  const CurrentStep = useMemo(
    () => mappedSteps[currentStep],
    [mappedSteps, currentStep],
  );

  return {
    renderStarterStep: renderWelcomeStep,
    CurretStep: CurrentStep,
    totalSteps: mappedSteps.length,
    currentStep: currentStep,
    handlePressStartOnboarding,
    handlePressNextStep,
    handlePressBackStep,
    formMethods,
  };
}
