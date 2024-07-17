import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';
import { useSignUp } from '@useCases';
import {
  DEFAULT_SIGNUP_FORM_VALUES,
  SignUpFormSchema,
  SignUpFormSchemaTypes,
} from './signUpFormSchema';

export function useSignUpScreen() {
  const { reset } = useNavigation()

  const { signUp } = useSignUp({
    onSuccess: (data, variables) => {
      reset({
        index: 1,
        routes: [
          {
            name: 'SignInScreen'
          },
          {
            name: 'OTPScreen',
            params: {
              email: variables!.email
            },
          },
        ],
      });
    },
    onError: (error) => console.log('Error creating user')
  })

  const formMethods = useForm<SignUpFormSchemaTypes>({
    defaultValues: DEFAULT_SIGNUP_FORM_VALUES,
    resolver: zodResolver(SignUpFormSchema),
    mode: 'onChange',
  });

  return {
    formMethods,
    signUp
  };
}
