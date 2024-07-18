import { AuthCredentials } from '@types';
import axios from 'axios';
import { AuthService } from '../AuthService/AuthService';

export const BASE_URL =
  'https://b4csoaei1m.execute-api.us-east-1.amazonaws.com/';
// customer
export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer eyJraWQiOiJPVm5RMHNCWkcwcTVtU2MyV2NCOUprQmZydlhFWDEzcFVnYms4QjYrQjJjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2NGU4MjRlOC01MDExLTcwODQtZmYwMy0xMWEzMzBkZWZlODkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9HRG1wb1VXS00iLCJjbGllbnRfaWQiOiI2bDJxbmJjazkxcDQwNzg0cGhyZ2dvcjlzMCIsIm9yaWdpbl9qdGkiOiJhYmZmN2VkMi00ZWYxLTRlMGUtYmViYS01NTg3YTNmNzBhZDIiLCJldmVudF9pZCI6ImI1MGRhNTYwLWUxOWEtNDQyMS1iZjBlLTY4YWZlYTZmYzc2OSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MjEyNTI2MzEsImV4cCI6MTcyMTI2MzQzMSwiaWF0IjoxNzIxMjUyNjMxLCJqdGkiOiJkZmIxYmY2ZS1kZGQ3LTRlNGItYjA1MS03MDU4YzA1NTM0MmYiLCJ1c2VybmFtZSI6IjY0ZTgyNGU4LTUwMTEtNzA4NC1mZjAzLTExYTMzMGRlZmU4OSJ9.CzIGP4g-JApIpGFqfV0QZKBV7S9mcqgmJb-yq7G0nAVJsnUZ4FcNbQeHf7cnwajDLHvldOCsLXzi4NXyqwwJJoiML470EX78gwp0KjTqwroqYlTb7ZSwg4fUB6CkR0ZX_hemNzfG8aWIo8j6A1PluJVk72ThnrpK7yJS6xKT_V9DFrqwocmSSg6DG711WI4-30mNHB8SJhfCNGwMRAHPR6ADbNXGyl7osfq8YjEKgO1JKMc23SfXyW5GKCVzAzwfU4hpdWrBdv3tAYku27HhB7erSTmduqj3Q8EUQy5gSb-ivL7yCfh28j14-4tMvPMTBgVhwO--43ltnVt1wyE7pQ'
  }
});

export type ResponseErrorProps = {
  message: string;
  type?: TypeOptions;
}

type TypeOptions =
  'USERNAME_EXISTS' |
  'CODE_DELIVERY_FAILURE' |
  'USER_NOT_CONFIRMED' |
  'PASSWORD_RESET_REQUIRED' |
  'CODE_MISMATCH' |
  'ALIAS_EXISTS' |
  'EXPIRED_CODE' |
  'INVALID_PASSWORD' |
  'INVALID_PARAMETER' |
  'INTERNAL_SERVER_ERROR';

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

HttpClient.interceptors.response.use(response => response, handleErrorInterceptor);

function handleErrorInterceptor(responseError: any): Promise<ResponseErrorProps | string> {
  if (responseError.response && responseError.response.status === 401) { 
    return Promise.reject(responseError);
  }

  if (responseError.response && responseError.response.data) {
    throw responseError.response.data;
  }

  console.log({responseError})

  throw responseError;
}

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = HttpClient.interceptors.response.use(
    response => response,
    async responseError => {

      console.log(responseError, 'interceptor')

      const { isRefreshTokenRequest, refreshToken } = AuthService()

      const failedRequest = responseError?.config;
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