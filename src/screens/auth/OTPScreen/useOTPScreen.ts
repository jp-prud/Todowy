import { useToastService } from "@context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetNavigationSuccess } from "@hooks";
import { useAccountConfirmation } from "@useCases";
import { useForm } from "react-hook-form";
import { DEFAULT_OTP_FORM_VALUES, OTPFormSchema, OTPFormSchemaTypes } from "./OTPSchemaForm";

export function useOTPScreen() {
  const { reset } = useResetNavigationSuccess()

  const { showToast } = useToastService()

  const { accountConfirmation, isPending } = useAccountConfirmation({
    errorMessage: 'An error occurred while confirming account',
    onError: (error) => {
      const {message, type } = error

      if (type === 'EXPIRED_CODE') {
        // IMPLEMENTS RESEND CODE
      }

      if (type === 'CODE_DELIVERY_FAILURE' || type === 'CODE_MISMATCH') {
        showToast({
          type: 'info',
          message
        })

        return
      }

      showToast({
        type: 'info',
        message
      })
    },
    onSuccess: () => {
      reset({
        title: 'Account confirmed',
        subtitle: 'Your account was successfully confirmed. You can now sign in with your credentials.'
      })
    }
  })

  const { setValue, handleSubmit, formState: { isSubmitting } } = useForm<OTPFormSchemaTypes>({
    resolver: zodResolver(OTPFormSchema),
    defaultValues: DEFAULT_OTP_FORM_VALUES,
  })

  const onSubmit = handleSubmit(async (data: OTPFormSchemaTypes) => {
    await accountConfirmation(data)
  })

  return {
    setValue,
    isSubmitting,
    accountConfirmation,
    isPending,
    onSubmit
  };
}