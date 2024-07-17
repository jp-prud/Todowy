import React, { LegacyRef, forwardRef } from "react";
import { KeyboardType } from "react-native";
import { default as OTPTextInput, default as OTPTextView } from "react-native-otp-textinput";

interface OTPInputProps {
  defaultValue?: string;
  inputCount: number;
  inputCellLength: number;
  offTintColor?: string | string[];
  handleTextChange(text: string): void;
  handleCellTextChange?(text: string, cellIndex: number): void;
  keyboardType?: KeyboardType;
  autoFocus?: boolean;
}

export const OTPInput = forwardRef((props: OTPInputProps,
  ref: LegacyRef<OTPTextView> | undefined
) => {
  return (
    <OTPTextInput
      ref={ref}
      tintColor="#756EF3"
      textInputStyle={{
        borderRadius: 16,
        borderWidth: 4,
        height: 58,
        width: 48,
        padding: 16
      }}
      {...props}
    />
  )
})