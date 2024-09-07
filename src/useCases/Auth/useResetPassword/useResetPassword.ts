import { AuthService, ResponseErrorProps } from '@services';
import { useMutation } from '@tanstack/react-query';
import { MutationKeys, MutationOptions, ResetPasswordProps } from '@types';

export function useResetPassword(options?: MutationOptions<any>) {
  const { resetPassword } = AuthService();

  const { mutateAsync } = useMutation<
    unknown,
    ResponseErrorProps,
    ResetPasswordProps
  >({
    mutationKey: [MutationKeys.resetPassword],
    mutationFn: credentials => resetPassword(credentials),
    onError: error => {
      if (options?.onError) {
        console.error(error);

        options.onError(error || options.errorMessage!);
      }
    },
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
  });

  return {
    resetPassword: mutateAsync,
  };
}
