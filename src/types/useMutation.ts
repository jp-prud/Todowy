import { ResponseErrorProps } from '@services';

export interface MutationOptions<TData, TVariables = {}> {
  onSuccess?: (data: TData, variables?: TVariables) => void;
  onError?: (error: ResponseErrorProps, variables?: TVariables) => void;
  errorMessage?: string;
}
