import { AuthService, ResponseErrorProps } from '@services';
import { useMutation } from '@tanstack/react-query';
import {
  MutationKeys,
  MutationOptions,
  SignUpProps,
} from '@types';

export function useSignUp(options?: MutationOptions<string>) {
  const { signUp } = AuthService();

  const { isPending, isError, mutateAsync } = useMutation<
    string,
    ResponseErrorProps,
    SignUpProps
  >({
    mutationKey: [MutationKeys.signUp],
    mutationFn: credentials => signUp(credentials),
    onSuccess: (data, variables) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables);
      }
    },
    onError: error => {
      console.log(error);

      if (options?.onError) {
        options.onError(error || options.errorMessage);
      }
    },
  });

  return {
    isPending,
    isError,
    signUp: mutateAsync,
  };
}
