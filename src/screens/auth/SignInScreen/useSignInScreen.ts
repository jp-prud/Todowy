import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  SignInFormSchema,
  SignInFormSchemaTypes,
} from './signInScreenFormSchema';

const defaultValues: SignInFormSchemaTypes = {
  name: '',
};

export function useSignInScreen() {
  const { control, handleSubmit } = useForm<SignInFormSchemaTypes>({
    defaultValues: {
      ...defaultValues,
    },
    resolver: zodResolver(SignInFormSchema),
  });

  function onSignUpPress() {}

  const onSubmit = handleSubmit(() => {});

  return {
    control,
    onSubmit,
    onSignUpPress,
  };
}
