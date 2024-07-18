import {
  AccountConfirmationProps,
  AuthCredentials,
  ResetPasswordProps,
  SaveProfileAvatarDTO,
  SignInProps,
  SignUpProps,
  StorageKeys
} from '@types';

import { AxiosRequestConfig } from 'axios';
import { storage } from '../StorageService/storage';
import { HttpClient } from '../utils/HttpClient';

export function AuthService() {
  const AUTH_KEY = StorageKeys.Auth;
  const REFRESH_TOKEN_URL = '/auth/refresh-token';

  async function signIn(credentials: SignInProps) {
    const { data } = await HttpClient.post<AuthCredentials>('/auth/sign-in', credentials);

    return data;
  }

  async function signUp(credentials: SignUpProps) {
    const { data } = await HttpClient.post<string>(
      '/auth/sign-up',
      credentials,
    );

    return data;
  }

  async function forgotPassword(email: string): Promise<void> {
    await HttpClient.post<void>('/auth/forgot-password', { email});

    return
  }
  
  async function resetPassword(data: ResetPasswordProps): Promise<void> {
    await HttpClient.post<void>('/auth/reset-password', data);

    return
  }

  async function accountConfirmation(credentials: AccountConfirmationProps) {
    await HttpClient.post<void>('/auth/confirmation-account', credentials);

    return
  }

  async function refreshToken(refreshToken: string) {
    const { data } = await HttpClient.post<string>(REFRESH_TOKEN_URL, {
      refreshToken
    });

    return data
  }

  function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
    const url = request.url;
    return url === REFRESH_TOKEN_URL;
  }

  function updateToken(token: string) {
    HttpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  function removeToken() {
    HttpClient.defaults.headers.common.Authorization = null;
  }

  async function save(authCredentials: AuthCredentials): Promise<void> {
    await storage.setItem(AUTH_KEY, authCredentials);
  } 

  async function load(): Promise<AuthCredentials | null> {
    const authCredentials = await storage.getItem<AuthCredentials>(AUTH_KEY);

    return authCredentials;
  }

  function saveProfileImage(avatar: SaveProfileAvatarDTO): Promise<void> {
    const storagedAuthCredentials = storage.getItem(StorageKeys.Auth);

    const updatedAuthCredentials = {
      ...storagedAuthCredentials,
      avatar,
    };

    return storage.setItem(StorageKeys.Auth, updatedAuthCredentials);
  }

  async function remove(): Promise<void> {
    await storage.removeItem(AUTH_KEY);
  }

  return {
    signIn,
    signUp,
    forgotPassword,
    resetPassword,
    accountConfirmation,
    refreshToken,
    isRefreshTokenRequest,
    save,
    load,
    saveProfileImage,
    remove,
    updateToken,
    removeToken
  };
}
