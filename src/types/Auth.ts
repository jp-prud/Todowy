import { AvatarListPresetUI } from '@components';

export interface AuthCredentials {
  avatar: AvatarListPresetUI;
  username: string;
}

export type SaveProfileAvatarDTO = AuthCredentials['avatar'];
