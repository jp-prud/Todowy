import { createContext, useCallback, useEffect, useState } from 'react';

import { AuthServiceProps } from '@context';
import { AuthService, registerInterceptor } from '@services';
import { AuthCredentials } from '@types';

import { authCredentialsStorage } from '../authCredentialsStorage';

export const AuthContext = createContext({} as AuthServiceProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { updateToken, removeToken } = AuthService();

  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCredentials = useCallback(async () => {
    try {
      const credentials = await authCredentialsStorage.load();

      if (credentials) {
        setAuthCredentials(credentials);
        updateToken(credentials.refreshToken);
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
    updateToken(credentials.accessToken);
    setIsLoading(false);
  }

  async function removeCredentials() {
    authCredentialsStorage.remove();
    removeToken()
    setAuthCredentials(null);
    setIsLoading(false);
  }

  useEffect(() => {
    loadCredentials();
  }, [loadCredentials]);

  useEffect(() => {
    const interceptor = registerInterceptor({
      // authCredentials,
      removeCredentials,
      // saveCredentials,
    });

    return interceptor;
  }, [removeCredentials]);

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
