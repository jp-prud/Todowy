import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';


import {
  AnimatedBox,
  Box,
  Button,
  ButtonProps,
  HORIZONTAL_PADDING,
  ProgressIndicator,
  Text,
} from '@components';

import { useStepper } from './useStepper';

interface StepperContextProps {
  previousStep: () => void;
  nextStep: () => void;
}

interface StepperProps {
  initialStepIndex?: number;
  fixedRenderContent?: React.ReactNode;
  steps: {
    content: React.ReactNode;
  }[];
}

export const StepperContext = createContext({} as StepperContextProps);

export function Stepper({
  fixedRenderContent,
  steps,
  initialStepIndex = 0,
}: StepperProps) {
  const { width } = useWindowDimensions();

  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);

  const previousStep = useCallback(() => {
    setCurrentStepIndex(prevState => Math.max(0, prevState - 1));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStepIndex(prevState => Math.min(steps.length - 1, prevState + 1));
  }, [steps]);

  useEffect(() => {
    () => {
      setCurrentStepIndex(initialStepIndex);
    };
  }, []);

  return (
    <StepperContext.Provider value={{ previousStep, nextStep }}>
      <Box
        alignSelf="center"
        justifyContent="center"
        width={width - HORIZONTAL_PADDING * 2}
        flex={1}>
        <ProgressIndicator
          total={steps.length}
          currentIndex={currentStepIndex}
          position="absolute"
          top={46}
          alignSelf="center"
        />

        <AnimatedBox
          style={{ flex: 1 }}>
          {fixedRenderContent && fixedRenderContent}
          {steps[currentStepIndex].content}
        </AnimatedBox>
      </Box>
    </StepperContext.Provider>
  );
}

export function StepperHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Box alignItems="center" g="s4" backgroundColor='background' zIndex={2}>
      <Text preset="headingMedium" textAlign="center">
        {title}
      </Text>
      <Text color="neutral500" textAlign="center">
        {subtitle}
      </Text>
    </Box>
  );
}

export function StepperContent({ children }: { children: React.ReactNode }) {
  return (
    <Box justifyContent="center" flex={1}>
      <AnimatedBox style={{ gap: 32 }}>
        {children}
      </AnimatedBox>
    </Box>
  );
}

export function StepperFooter({ children }: { children: React.ReactNode }) {
  return (
    <Box flexDirection="row" alignItems="flex-end">
      <AnimatedBox
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 16,
        }}>
        {children}
      </AnimatedBox>
    </Box>
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
    <Button flex={1} text={text} onPress={onPress ?? nextStep} {...props} />
  );
}
