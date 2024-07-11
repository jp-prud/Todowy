import { useFormContext } from 'react-hook-form';

import { FormTextInput, StepperFooter, StepperHeader, StepperNextButton, StepperPreviousButton } from '@components';
import { OnboardingFormSchemaTypes } from '../../onboardingProfileFormSchema';

export function ProfileFormStep() {
  const {
    control,
    watch,
    formState: { isSubmitting },
  } = useFormContext<OnboardingFormSchemaTypes>();

  return (
    <>
      <StepperHeader
        title={`@${watch('username')}`}
        subtitle='Insert your username'
      />

      <FormTextInput control={control} prefix="@" name="username" />

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton  />
      </StepperFooter>
    </>
  );
}
