import { AuthService, ResponseErrorProps } from '@services';
import { useMutation } from '@tanstack/react-query';
import { MutationKeys, MutationOptions } from '@types';

export function useForgotPassword(options?: MutationOptions<void>) {
  const { forgotPassword } = AuthService();

  const { mutateAsync, isPending } = useMutation<
    void,
    ResponseErrorProps,
    string
  >({
    mutationKey: [MutationKeys.forgotPassword],
    mutationFn: email => forgotPassword(email),
    onError: error => {
      if (options?.onError) {
        console.error(error);

        options.onError(error || options.errorMessage!);
      }
    },
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
  });

  return {
    isPending,
    forgotPassword: mutateAsync,
  };
}
