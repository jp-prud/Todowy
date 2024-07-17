import React from 'react';

import { useFormContext } from 'react-hook-form';

import {
  FormTextInput,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  useStepper,
} from '@components';

import { CreateProjectFormSchemaTypes } from '../../createProjectFormSchema';

export function FormNameStep() {
  const { nextStep } = useStepper();

  const {
    control,
    trigger,
    formState: { isSubmitting },
  } = useFormContext<CreateProjectFormSchemaTypes>();

  async function handleOnPressNext() {
    const isValid = await trigger('name');

    if (isValid) {
      nextStep();
    }
  }

  return (
    <>
      <StepperContent>
        <StepperHeader
          title="Name your project"
          subtitle="Choose a nickname for your project."
        />

        <FormTextInput
          control={control}
          name="name"
          label="Project Name"
          placeholder="School Project"
        />
      </StepperContent>

      <StepperFooter>
        <StepperNextButton
          onPress={handleOnPressNext}
          disabled={isSubmitting}
        />
      </StepperFooter>
    </>
  );
}
