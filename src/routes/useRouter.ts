import { useEffect } from 'react';

import { useAuthContext } from '@context';
import { useSettings } from '@useCases';

import { Stacks } from './navigationTypes';

export function useRouter(): Stacks {
  const { authCredentials, isLoading } = useAuthContext();

  const { hideSplashScreen, showOnboarding } = useSettings();

  useEffect(() => {
    if (!isLoading) {
      hideSplashScreen();
    }
  }, [isLoading]);

  if (isLoading) {
    return 'Loading';
  }

  if (showOnboarding) {
    return 'Onboarding';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Auth';
}
