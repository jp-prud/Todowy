import React from 'react';

import { useFormContext } from 'react-hook-form';

import {
  FormTextInput,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  StepperPreviousButton,
  useStepper,
} from '@components';

import { SignUpFormSchemaTypes } from '../signUpFormSchema';

export function ProfileFormStep() {
  const {
    control,
    trigger,
    watch,
    formState: { isSubmitting },
  } = useFormContext<SignUpFormSchemaTypes>();

  const { nextStep } = useStepper();

  async function onHandlePressNext() {
    const _isValid = await trigger('profile.username');

    if (_isValid) {
      nextStep();
    }
  }

  const username = watch('profile.username');

  const disabledForm = username !== '' && isSubmitting;

  return (
    <>
      <StepperContent>
        <StepperHeader
          title={username !== '' ? `@${username}` : 'Create your username'}
          subtitle="How would you like to be called?"
        />

        <FormTextInput
          control={control}
          prefix="@"
          name="profile.username"
          autoFocus
        />
      </StepperContent>

      <StepperFooter>
        <StepperPreviousButton disabled={isSubmitting} />
        <StepperNextButton
          onPress={onHandlePressNext}
          disabled={disabledForm}
          loading={isSubmitting}
        />
      </StepperFooter>
    </>
  );
}
