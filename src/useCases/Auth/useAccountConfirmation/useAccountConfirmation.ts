import { AuthService, ResponseErrorProps } from '@services';
import { useMutation } from '@tanstack/react-query';
import {
  AccountConfirmationProps,
  MutationKeys,
  MutationOptions,
} from '@types';

export function useAccountConfirmation(options?: MutationOptions<void>) {
  const { accountConfirmation } = AuthService();

  const { isPending, mutateAsync } = useMutation<
    void,
    ResponseErrorProps,
    AccountConfirmationProps
  >({
    mutationKey: [MutationKeys.accountConfirmation],
    mutationFn: credentials => accountConfirmation(credentials),
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error || options!.errorMessage);
      }
    },
  });

  return {
    accountConfirmation: mutateAsync,
    isPending,
  };
}
