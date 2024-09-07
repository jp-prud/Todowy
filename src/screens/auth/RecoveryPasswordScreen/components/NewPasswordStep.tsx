import { useFormContext } from 'react-hook-form';

import {
  FormPasswordInput,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  StepperPreviousButton,
} from '@components';

import { ResetPasswordFormSchemaTypes } from '../recoveryPasswordFormSchema';
import { useRecoveryPassword } from '../useRecoveryPassword';

export function NewPasswordStep() {
  const { resetPassword } = useRecoveryPassword();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useFormContext<ResetPasswordFormSchemaTypes>();

  const onSubmit = handleSubmit(async data => {
    await resetPassword(data);
  });

  return (
    <>
      <StepperContent>
        <StepperHeader
          title="Create a new password"
          subtitle="Enter a new password for your account."
        />

        <FormPasswordInput
          label="New password"
          name="newPassword"
          control={control}
          placeholder="Enter your new password"
          description="At least 10 characters, contain 1 uppercase, 1 lowercase, 1 number, 1 special character"
          autoFocus
        />
      </StepperContent>

      <StepperFooter>
        <StepperPreviousButton disabled={isSubmitting} />
        <StepperNextButton
          text="Create Password"
          onPress={onSubmit}
          disabled={isSubmitting}
          loading={isSubmitting}
        />
      </StepperFooter>
    </>
  );
}
