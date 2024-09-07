import React, { useEffect } from 'react';

import {
  Box,
  OTPInput,
  Screen,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
} from '@components';
import { AuthScreenProps } from '@routes';

import { useOTPScreen } from './useOTPScreen';

export function OTPScreen({ route }: AuthScreenProps<'OTPScreen'>) {
  const { email } = route.params;

  const { setValue, onSubmit, isSubmitting } = useOTPScreen();

  useEffect(() => {
    setValue('email', email);
  }, [setValue, email]);

  return (
    <Screen canGoBack>
      <StepperContent>
        <StepperHeader
          title="We've sent a code to your email."
          subtitle={`To confirm your email, please enter the code we've sent to ${email.replace(
            /(.{2})(.*)(@.*)/,
            '$1****$3',
          )}`}
        />

        <Box alignSelf="center">
          <OTPInput
            handleTextChange={text => setValue('code', text)}
            inputCount={6}
            inputCellLength={1}
          />
        </Box>
      </StepperContent>

      <StepperFooter>
        <StepperNextButton
          text="Confirm code"
          loading={isSubmitting}
          onPress={onSubmit}
          disabled={isSubmitting}
        />
      </StepperFooter>
    </Screen>
  );
}
