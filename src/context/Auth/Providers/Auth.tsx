import { createContext, useCallback, useEffect, useState } from 'react';

import { AuthServiceProps } from '@context';
import { AuthService } from '@services';
import { AuthCredentials } from '@types';
import { delay } from '@utils';

import { authCredentialsStorage } from '../authCredentialsStorage';

// import {authCredentialsStorage} from '../authCredentialsStorage';

export const AuthContext = createContext({} as AuthServiceProps);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const {updateAccessToken, removeAccessToken} = AuthService();

  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCredentials = useCallback(async () => {
    await delay();

    try {
      // const credentials = await authCredentialsStorage.load();

      // console.log({credentials});

      updateAccessToken(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMGYzM2IyNi00NDllLTQ3MTMtODNlMy05ZGUyZmY1MzE3MmUiLCJpYXQiOjE3MTE0MTY1ODMsImV4cCI6MTcxMjAyMTM4M30.jgTcZ_qd8qce3bGNQ1IC15a9zdb_W-8OmpL-raSEUIs',
      );

      setAuthCredentials({
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMGYzM2IyNi00NDllLTQ3MTMtODNlMy05ZGUyZmY1MzE3MmUiLCJpYXQiOjE3MTE0MTY1ODMsImV4cCI6MTcxMjAyMTM4M30.jgTcZ_qd8qce3bGNQ1IC15a9zdb_W-8OmpL-raSEUIs',
      });

      // if (credentials) {
      //   updateAccessToken(credentials.accessToken);
      //   setAuthCredentials(credentials);
      // }
    } catch (error) {
      // TODO: Handle error
    } finally {
      setIsLoading(false);
    }
  }, [updateAccessToken]);

  async function saveCredentials(credentials: AuthCredentials) {
    await delay();

    updateAccessToken(credentials.accessToken);
    authCredentialsStorage.save(credentials);
    setAuthCredentials(credentials);
    setIsLoading(false);
  }

  async function removeCredentials() {
    await delay();

    removeAccessToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
    setIsLoading(false);
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
      }}>
      {children}
    </AuthContext.Provider>
  );
}
