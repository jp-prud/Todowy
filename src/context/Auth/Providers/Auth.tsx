import { createContext, useCallback, useEffect, useState } from 'react';

import { AuthServiceProps } from '@context';
import { AuthCredentials } from '@types';
import { delay } from '@utils';

import { authCredentialsStorage } from '../authCredentialsStorage';

export const AuthContext = createContext({} as AuthServiceProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCredentials = useCallback(async () => {
    try {
      const credentials = await authCredentialsStorage.load();

      if (credentials) {
        setAuthCredentials(credentials);
      }
    } catch (error) {
      // TODO: Handle error
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function saveCredentials(credentials: AuthCredentials) {
    authCredentialsStorage.save(credentials);
    setAuthCredentials(credentials);
    setIsLoading(false);
  }

  async function removeCredentials() {
    await delay();

    authCredentialsStorage.remove();
    setAuthCredentials(null);
    setIsLoading(false);
  }

  async function saveProfileImage(avatar: AuthCredentials['avatar']) {
    const storagedAuthCredentials = await authCredentialsStorage.load();

    if (storagedAuthCredentials) {
      const updatedAuthCredentials: AuthCredentials = {
        ...storagedAuthCredentials,
        avatar,
      };

      await authCredentialsStorage.save(updatedAuthCredentials);
      setAuthCredentials(updatedAuthCredentials);
    }
  }

  useEffect(() => {
    loadCredentials();
  }, [loadCredentials]);

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
        saveProfileImage,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
