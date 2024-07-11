import { AvatarListPresetUI } from '@components';

export interface AuthCredentials {
  avatar: AvatarListPresetUI;
  username: string;
  email: string;
}

export type SaveProfileAvatarDTO = AuthCredentials['avatar'];
