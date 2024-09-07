import { useAuthContext } from '@context';
import { AnalyticsService, AuthService, ResponseErrorProps } from '@services';
import { useMutation } from '@tanstack/react-query';
import {
  AuthCredentials,
  MutationKeys,
  MutationOptions,
  SignInProps,
} from '@types';

export function useSignIn(
  options: MutationOptions<AuthCredentials, SignInProps>,
) {
  const { signIn } = AuthService();
  const { capture } = AnalyticsService();

  const { saveCredentials } = useAuthContext();

  const { isPending, isSuccess, isError, mutateAsync } = useMutation<
    AuthCredentials,
    ResponseErrorProps,
    SignInProps
  >({
    mutationKey: [MutationKeys.signIn],
    mutationFn: credentials => signIn(credentials),
    onSuccess: async data => {
      await saveCredentials(data);

      capture('signIn', { email: data.email });

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: (error, variables) => {
      if (options?.onError) {
        options.onError(error || options.errorMessage, variables);
      }
    },
  });

  return {
    isPending,
    isSuccess,
    isError,
    signIn: mutateAsync,
  };
}
