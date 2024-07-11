import { Box, FormPasswordInput, FormTextInput, StepperFooter, StepperHeader, StepperNextButton, StepperPreviousButton } from "@components";
import React from "react";
import { useFormContext } from "react-hook-form";
import { OnboardingFormSchemaTypes } from "../../onboardingProfileFormSchema";

export function SignUpFormStep() {
  const {
    control,
    watch,
    formState: { isSubmitting },
  } = useFormContext<OnboardingFormSchemaTypes>();

  return (
    <Box>
      <StepperHeader
        title="We've sent a code to your email."
        subtitle="We're soo close to finish! Just need a few more details to create your account."
      />

      <Box mt="s32" g="s16">
        <FormTextInput
          control={control}
          name="email"
          label="Email"
          placeholder="Insert your name"
        />
        
        <FormPasswordInput
          control={control}
          name="password"
          label="Password"
          description="At least 10 characters, contain 1 uppercase, 1 lowercase, 1 number, 1 special character"
        />
      </Box>

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton  />
      </StepperFooter>
    </Box>
  );
}