import { zodResolver } from "@hookform/resolvers/zod";
import { useResetNavigationSuccess } from "@hooks";
import { useForgotPassword, useResetPassword } from "@useCases";
import { useForm } from "react-hook-form";
import { DEFAULT_RESET_PASSWORD_FORM_VALUES, ResetPasswordFormSchema, ResetPasswordFormSchemaTypes } from "./recoveryPasswordFormSchema";

export function useRecoveryPassword() {
  const { reset } = useResetNavigationSuccess()

  const { forgotPassword } = useForgotPassword({
    onSuccess: () => { },
    onError: () => { },
    errorMessage: 'Error sending email',
  })

  const { 
    resetPassword,
  } = useResetPassword({
    onSuccess: () => reset({
      title: 'Password reset',
      subtitle: 'Your password was successfully reset. You can now sign in with your new password.'
    }),
    onError: () => { },
    errorMessage: 'Error resetting password'
  })

  const formMethods = useForm<ResetPasswordFormSchemaTypes>({
    mode: 'onChange',
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: DEFAULT_RESET_PASSWORD_FORM_VALUES
  });

  return {
    formMethods,
    forgotPassword,
    resetPassword
  };
}