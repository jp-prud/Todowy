import { FormProvider } from 'react-hook-form';

import { Box, Screen, Stepper } from '@components';
import { AuthScreenProps } from '@routes';

import {
  AvatarPickerStep,
  ProfileFormStep,
  SignUpFormStep,
} from './components';
import { useSignUpScreen } from './useSignUpScreen';

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const { formMethods } = useSignUpScreen();

  return (
    <Screen canGoBack>
      <FormProvider {...formMethods}>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Stepper
            steps={[
              { content: <AvatarPickerStep /> },
              { content: <ProfileFormStep /> },
              { content: <SignUpFormStep /> },
            ]}
          />
        </Box>
      </FormProvider>
    </Screen>
  );
}
