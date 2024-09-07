import { useFormContext } from 'react-hook-form';

import {
  Box,
  FormPasswordInput,
  FormTextInput,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  StepperPreviousButton,
} from '@components';
import { ThemeColors } from '@theme';

import { SignUpFormSchemaTypes } from '../signUpFormSchema';
import { useSignUpScreen } from '../useSignUpScreen';

export function SignUpFormStep() {
  const { signUp } = useSignUpScreen();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useFormContext<SignUpFormSchemaTypes>();

  const onSubmit = handleSubmit(
    async data => {
      return await signUp({
        ...data,
        profile: {
          ...data.profile,
          avatar: {
            ...data.profile.avatar,
            color: data.profile.avatar.color as ThemeColors,
          },
        },
      });
    },
    error => console.log('oi erro', error),
  );

  return (
    <>
      <StepperContent>
        <StepperHeader
          title="Create your account"
          subtitle="We're soo close to finish! Just need a few more details to create your account."
        />

        <Box g="s16">
          <FormTextInput
            control={control}
            name="email"
            label="Email"
            placeholder="Insert your email"
            description="We'll send you a confirmation email"
          />

          <FormPasswordInput
            control={control}
            name="password"
            label="Password"
            placeholder="Insert your password"
            description="At least 10 characters, contain 1 uppercase, 1 lowercase, 1 number, 1 special character"
          />
        </Box>
      </StepperContent>

      <StepperFooter>
        <StepperPreviousButton disabled={isSubmitting} />
        <StepperNextButton
          onPress={onSubmit}
          disabled={isSubmitting}
          loading={isSubmitting}
          text="Create"
        />
      </StepperFooter>
    </>
  );
}
