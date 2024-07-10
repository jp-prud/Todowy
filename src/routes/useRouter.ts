import { useEffect } from 'react';

import { useAuthContext } from '@context';

import { Stacks } from './navigationTypes';

import { useSettings } from '@useCases'
  
export function useRouter(): Stacks {
  const { authCredentials, isLoading } = useAuthContext();

  const { hideSplashScreen} = useSettings()

  useEffect(() => {
    if (!isLoading) {
      hideSplashScreen();
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
