import { createContext, useCallback, useState } from "react";
import { useWindowDimensions } from "react-native";
import Animated, { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";

import { Box, Button, ButtonProps, HORIZONTAL_PADDING, Text } from "@components";
import { useStepper } from "./useStepper";

interface StepperContextProps {
  previousStep: () => void;
  nextStep: () => void;
}

interface StepperProps {
  initialStepIndex?: number;
  steps: {
    content: React.ReactNode;
  }[]
}

export const StepperContext = createContext({} as StepperContextProps)

export function Stepper({ steps, initialStepIndex = 0 }: StepperProps) {
  const { width } = useWindowDimensions();

  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex)

  const previousStep = useCallback(() => { 
    setCurrentStepIndex(prevState => Math.max(0, prevState - 1))
  }, [])

  const nextStep = useCallback(() => {
    setCurrentStepIndex(prevState => Math.min(steps.length - 1, prevState + 1))
  }, [steps])

  return (
    <StepperContext.Provider value={{ previousStep, nextStep }}> 
      <Box alignSelf="center" width={width - HORIZONTAL_PADDING * 2}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          layout={LinearTransition.springify()}
        >
          {steps[currentStepIndex].content}
        </Animated.View>
      </Box>
    </StepperContext.Provider>
  );
}

export function StepperHeader({ title, subtitle }: { 
  title: string;
  subtitle: string;
}) { 
  return (
    <Box alignItems="center" g="s4">
      <Text preset="headingMedium">{title}</Text>
      <Text color="neutral500">{subtitle}</Text>
    </Box>
  );
}

export function StepperFooter({children}: { children: React.ReactNode }) {
  return (
    <Box flexDirection="row" justifyContent="space-between" mt="s32" g="s16">{children}</Box>
  );
} 

export function StepperPreviousButton({
  onPress,
  ...props
}: Omit<ButtonProps, 'text'>) {
  const { previousStep } = useStepper();

  return (
    <Button
      flex={1}
      preset="outline"
      text="Back"
      onPress={onPress ?? previousStep}
      {...props}
    />
  );
}

export function StepperNextButton({
  text = 'Continue',
  onPress,
  ...props
}: Omit<ButtonProps, 'text'> & { text?: string }) {
  const { nextStep } = useStepper();

  return (
    <Button
      flex={1}
      text={text}
      onPress={onPress ?? nextStep}
      {...props}
    />
  );
}