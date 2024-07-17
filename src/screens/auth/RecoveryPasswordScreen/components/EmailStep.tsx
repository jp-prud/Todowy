import { FormTextInput, StepperContent, StepperFooter, StepperHeader, StepperNextButton, useStepper } from "@components";
import { useFormContext } from "react-hook-form";
import { ResetPasswordFormSchemaTypes } from "../recoveryPasswordFormSchema";
import { useRecoveryPassword } from "../useRecoveryPassword";

export function EmailStep() {
  const { forgotPassword } = useRecoveryPassword()

  const { 
    control, trigger, getValues, formState: { isSubmitting, isValidating } 
} = useFormContext<ResetPasswordFormSchemaTypes>()

  const { nextStep } = useStepper()

  async function handleOnPressNext() {
    const isValid = await trigger('email')

    const { email } = getValues()

    if (isValid) {
      await forgotPassword(email)

      nextStep();
    }
  }

  return (
    <>
      <StepperContent>
        <StepperHeader
          title="Forgot your password?"
          subtitle="Enter your email to receive a code."
        />

        <FormTextInput
          control={control}
          label="Email"
          placeholder="Enter your email"
          name="email"
          autoFocus
        />
      </StepperContent>

      <StepperFooter>
        <StepperNextButton 
          text="Send Code" 
          onPress={handleOnPressNext} 
          loading={isSubmitting || isValidating} 
          disabled={isSubmitting || isValidating} 
        />
      </StepperFooter>
    </>
  );
}