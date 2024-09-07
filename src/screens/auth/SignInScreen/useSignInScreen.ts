import { useToastService } from '@context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { SignInProps } from '@types';
import { useSignIn } from '@useCases';
import { useForm } from 'react-hook-form';

import {
  DEFAULT_SIGNIN_FORM_VALUES,
  SignInFormSchema,
  SignInFormSchemaTypes,
} from './signInScreenFormSchema';

export function useSignInScreen() {
  const { showToast } = useToastService();
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchemaTypes>({
    defaultValues: DEFAULT_SIGNIN_FORM_VALUES,
    resolver: zodResolver(SignInFormSchema),
  });

  const { signIn } = useSignIn({
    errorMessage: 'An error occurred while login in',
    onError: (error, variables) => {
      const { type, message } = error;

      if (type === 'USER_NOT_CONFIRMED') {
        showToast({ type: 'info', message });

        navigate('OTPScreen', { email: variables!.email });

        return;
      }

      showToast({ type: 'info', message });
    },
  });

  const onSubmit = handleSubmit(async (data: SignInProps) => {
    await signIn(data);
  });

  return {
    control,
    onSubmit,
    isSubmitting,
  };
}
