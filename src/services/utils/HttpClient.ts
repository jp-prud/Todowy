import axios from 'axios';
import { authCredentialsStorage } from 'src/context/Auth/authCredentialsStorage';

export const BASE_URL =
  'https://b4csoaei1m.execute-api.us-east-1.amazonaws.com/';
// customer
export const HttpClient = axios.create({
  baseURL: BASE_URL,
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

HttpClient.interceptors.request.use(
  async (config) => {
    // const credentials = await authCredentialsStorage.load();

    // if (credentials?.accessToken) {
    //   config.headers.Authorization = `Bearer ${credentials.accessToken}`;
    // }

    return config
  } 
)

HttpClient.interceptors.response.use(response => response, handleErrorInterceptor);

function handleErrorInterceptor(error: any): Promise<ResponseErrorProps | string> {
  console.log(error.response)

  if (error.response && error.response.data) {
    throw error.response.data;
  }

  throw error.message;
}

