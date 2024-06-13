import { useEffect } from 'react';

import { useAuthContext } from '@context';

import { Stacks } from './navigationTypes';

export function useRouter(): Stacks {
  const { authCredentials, isLoading } = useAuthContext();

  useEffect(() => {
    if (!isLoading) {
      // settingsService.hideSplashScreen();
    }
  }, [isLoading]);

  if (isLoading) {
    return 'Loading';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Onboarding';
}
