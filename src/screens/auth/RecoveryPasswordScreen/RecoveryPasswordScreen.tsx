import { Screen, Stepper } from "@components";
import { AuthScreenProps } from "@routes";
import { FormProvider } from "react-hook-form";
import { EmailStep, NewPasswordStep, OTPStep } from "./components";
import { useRecoveryPassword } from "./useRecoveryPassword";

export function RecoveryPasswordScreen({ }: AuthScreenProps<'RecoveryPasswordScreen'>) {
  const { formMethods } = useRecoveryPassword()

  return (
    <Screen canGoBack>
      <FormProvider {...formMethods}>
        <Stepper
          steps={[
            { content: <EmailStep /> },
            { content: <OTPStep /> },
            { content: <NewPasswordStep /> }
          ]}
        />
      </FormProvider>
    </Screen>
  );
}