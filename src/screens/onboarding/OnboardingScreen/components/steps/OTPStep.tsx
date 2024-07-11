import { Box, Button, Stepper, StepperFooter, StepperHeader, StepperNextButton, Text } from "@components";
import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { default as OTPTextInput, default as OTPTextView } from 'react-native-otp-textinput';
import { OnboardingFormSchemaTypes } from "../../onboardingProfileFormSchema";

export function OTPStep() {
  const { watch } = useFormContext<OnboardingFormSchemaTypes>()

  const [otpInput, setOtpInput] = useState<string>('');

  const input = useRef<OTPTextView>(null);

  
  return (
    <Box>
      <StepperHeader
        title="We've sent a code to your email."
        subtitle={`To confirm your email, please enter the code we've sent to ${watch('email').replace(/(.{2})(.*)(@.*)/, '$1****$3')}`}
      /> 

      <Box g="s32" alignSelf="center" mt="s32">
        <OTPTextInput 
          ref={input} 
          keyboardType="numeric" 
          tintColor="#756EF3"
          containerStyle={{
          }}
          textInputStyle={{
            borderRadius: 16,
            borderWidth: 4,
            height: 56,
            width: 56,
            padding: 16
          }}
          handleTextChange={setOtpInput} 
          autoFocus
        />

        <StepperFooter>
          <StepperNextButton text="Start on Todowy!!" />
        </StepperFooter>
      </Box>
    </Box>
  );
}