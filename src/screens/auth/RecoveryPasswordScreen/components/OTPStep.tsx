import { Box, OTPInput, StepperContent, StepperFooter, StepperHeader, StepperNextButton, StepperPreviousButton, Text, useStepper } from "@components";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ResetPasswordFormSchemaTypes } from "../recoveryPasswordFormSchema";

export function OTPStep() {
  const { nextStep } = useStepper()

  const {
    setValue,
    trigger,
    getValues,
    formState: { isValidating, errors },
  } = useFormContext<ResetPasswordFormSchemaTypes>()

  async function handleOnPressNext() {
    const isValid = await trigger('code');

    if (isValid) {
      nextStep()
    }
  }

  const { email }  = getValues()

  return (
    <>
      <StepperContent>
        <StepperHeader
          title="We've sent a code to your email."
          subtitle={`To confirm your email, please enter the code we've sent to ${email.replace(
            /(.{2})(.*)(@.*)/,
            '$1****$3',
          )}`}
        />

        <OTPInput
          handleTextChange={code => setValue('code', code)}
          inputCount={6}
          inputCellLength={1}
        />

        {errors.code && (
          <Box justifyContent="center" alignItems="center">
            <Text color="error" textAlign="center">{errors.code.message}</Text>
          </Box>
        )}
      </StepperContent>

      <StepperFooter>
        <StepperPreviousButton disabled={isValidating} />
        <StepperNextButton 
          disabled={isValidating} 
          loading={isValidating} 
          onPress={handleOnPressNext}
        />
      </StepperFooter>
    </>
  );
}