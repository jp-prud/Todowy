import { AuthCredentials } from '@types';

export interface AuthServiceProps {
  authCredentials: AuthCredentials | null;
  saveCredentials: (credentials: AuthCredentials) => Promise<void>;
  removeCredentials: () => void;
  isLoading: boolean;
}
