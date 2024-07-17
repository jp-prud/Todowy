import React from 'react';

import { ONBOARDING_MOCKED_TASKS } from '@types';

import { AnimatedBox, Box, Button, Screen, Task, Text } from '@components';
import { OnboardingScreenProps } from '@routes';

import { useOnboardingScreen } from './useOnboardingScreen';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const {handlePressFinishOnboarding} = useOnboardingScreen();

  return (
    <Screen>
      <Box flex={1} justifyContent="center" alignItems="center">
        <AnimatedBox>
          <Box justifyContent="center" alignItems="center" mb="s24">
            <Text preset="headingMedium">Welcome to</Text>
            <Text preset="headingLarge" color="primary">
              Todowy
            </Text>
          </Box>

          <Box gap="s20" width={320} justifyContent="flex-start">
            <Box alignItems="center" g="s4" mb="s16">
              <Text preset="headingMedium">Create a task</Text>
              <Text color="neutral500" textAlign="center">
                Write down your task so you don't forget.
              </Text>
            </Box>

            <Task task={ONBOARDING_MOCKED_TASKS[0]} />

            <Box mt="s32">
              <Button text="Start" onPress={handlePressFinishOnboarding} />
            </Box>
          </Box>
        </AnimatedBox>
      </Box>
    </Screen>
  );
}
