import { AuthCredentials } from '@types';

export interface AuthServiceProps {
  authCredentials: AuthCredentials | null;
  saveCredentials: (credentials: AuthCredentials) => Promise<void>;
  saveProfileImage: (avatar: any) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
