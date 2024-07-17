import { AvatarListPresetUI } from '@components';

export type AuthCredentials = AccessTokenProps & {
  email: string;
  profile: {
    username: string;
    avatar: AvatarListPresetUI;
  }
}

export interface AccessTokenProps {
  accessToken: string;
  refreshToken: string;
}

export interface SignUpProps {
  email: string;
  password: string;
  profile: {
    username: string;
    avatar: AvatarListPresetUI;
  };
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface ResetPasswordProps {
  email: string;
  code: string;
  newPassword: string;
}

export interface AccountConfirmationProps {
  email: string;
  code: string;
}

export interface AccountConfirmationProps {
  email: string;
  code: string;
}

export type SaveProfileAvatarDTO = AuthCredentials['avatar'];
