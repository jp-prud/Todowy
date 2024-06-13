import { storage } from '@services';
import { AuthCredentials, SaveProfileAvatarDTO, StorageKeys } from '@types';

const AUTH_KEY = StorageKeys.Auth;

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

export const authCredentialsStorage = {
  save,
  load,
  remove,
  saveProfileImage,
};
