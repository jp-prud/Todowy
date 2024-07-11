import React from 'react';

import { FormProvider } from 'react-hook-form';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import { Box, Screen, Text } from '@components';
import { OnboardingScreenProps } from '@routes';

import { Welcome, WrapperOnboardingForm } from './components';
import { useOnboardingScreen } from './useOnboardingScreen';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const {
    renderStarterStep,
    handlePressStartOnboarding,
    handlePressFinishOnboarding,
    formMethods,
  } = useOnboardingScreen();

  return (
    <Screen>
      <Box flex={1} justifyContent="center" alignItems="center" g="s32">
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          layout={LinearTransition.springify()}>
          <Box justifyContent="center" alignItems="center" mt="s24">
            <Text preset="headingMedium">Welcome to</Text>
            <Text preset="headingLarge" color="primary">
              Todowy
            </Text>
          </Box>
        </Animated.View>

        <Box justifyContent="center" alignItems="center">
          {renderStarterStep ? (
            <Welcome 
              onPressStartOnboarding={handlePressStartOnboarding} 
              onPressFinishOnboarding={handlePressFinishOnboarding}
            />
          ) : (
            <FormProvider {...formMethods}>
              <WrapperOnboardingForm />
            </FormProvider>
          )}
        </Box>
      </Box>
    </Screen>
  );
}
