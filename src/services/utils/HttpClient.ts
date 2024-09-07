import { AuthCredentials, env } from '@types';
import axios from 'axios';

export const BASE_URL = env.API_URL;
// customer
export const HttpClient = axios.create({
  baseURL: BASE_URL,
});

export type ResponseErrorProps = {
  message: string;
  type?: TypeOptions;
};

type TypeOptions =
  | 'USERNAME_EXISTS'
  | 'CODE_DELIVERY_FAILURE'
  | 'USER_NOT_CONFIRMED'
  | 'PASSWORD_RESET_REQUIRED'
  | 'CODE_MISMATCH'
  | 'ALIAS_EXISTS'
  | 'EXPIRED_CODE'
  | 'INVALID_PASSWORD'
  | 'INVALID_PARAMETER'
  | 'INTERNAL_SERVER_ERROR';

type InterceptorProps = {
  // authCredentials: AuthCredentials | null;
  // saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => void;
};

HttpClient.interceptors.response.use(
  response => response,
  handleErrorInterceptor,
);

function handleErrorInterceptor(
  responseError: any,
): Promise<ResponseErrorProps | string> {
  if (
    responseError.response &&
    responseError.response.status &&
    responseError.response.status === 401
  ) {
    return Promise.reject(responseError);
  }

  if (responseError.response && responseError.response.data) {
    throw responseError.response.data;
  }

  console.log({ responseError });

  throw responseError;
}

export function registerInterceptor({
  // authCredentials,
  removeCredentials,
}: // saveCredentials,
InterceptorProps) {
  const interceptor = HttpClient.interceptors.response.use(
    response => response,
    async responseError => {
      console.log(responseError, 'interceptor');

      // const { isRefreshTokenRequest, refreshToken } = AuthService();
      //
      // const failedRequest = responseError?.config;
      // const hasNotRefreshToken = authCredentials?.refreshToken;
      // const _isRefreshTokenRequest =
      //   isRefreshTokenRequest(failedRequest);

      if (responseError.response.status === 401) {
        // if (hasNotRefreshToken || _isRefreshTokenRequest || failedRequest.sent) {
        //   removeCredentials();
        //   return Promise.reject(responseError);
        // }

        if (true) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        // failedRequest.sent = true;

        // const newRefreshToken = await refreshToken(
        //   authCredentials!.refreshToken,
        // );

        // console.log({newRefreshToken})

        // saveCredentials({
        //   ...authCredentials!,
        //   refreshToken: newRefreshToken,
        // });

        // failedRequest.headers.Authorization = `Bearer ${newRefreshToken}`;

        // return HttpClient(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  // remove listener when component unmount
  return () => HttpClient.interceptors.response.eject(interceptor);
}
