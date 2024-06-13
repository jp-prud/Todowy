export interface SignInDTO {
  name: string;
  // password: string;
}

export interface SignUpDTO {
  username: string;
  fullName: string;
  email: string;
  password: string;
  avatar: string;
}

export interface AuthCredentials {
  accessToken: string;
}
