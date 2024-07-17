import { useEffect, useState } from 'react';

import { useSettings } from '@useCases';

export function useOnboardingScreen() {
  const { toggleOnboardingStatus } = useSettings();

  const [renderWelcomeStep, setRenderWelcomeStep] = useState(true);

  function handlePressFinishOnboarding() {
    toggleOnboardingStatus();
  }

  function handlePressStartOnboarding() {
    setRenderWelcomeStep(false);
  }

  function handlePressReturnWelcomeStep() {
    setRenderWelcomeStep(true);
  }

  useEffect(() => {
    () => {
      setRenderWelcomeStep(true);
    };
  }, []);

  return {
    handlePressReturnWelcomeStep,
    renderStarterStep: renderWelcomeStep,
    handlePressStartOnboarding,
    handlePressFinishOnboarding,
  };
}
