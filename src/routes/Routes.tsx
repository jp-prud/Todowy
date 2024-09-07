import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { env } from '@types';
import { PostHogProvider } from 'posthog-react-native';

import { ActivityIndicator, Box } from '@components';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { Stacks } from './navigationTypes';
import { OnboardingStack } from './OnboardingStack';
import { useRouter } from './useRouter';

function LoadingScreen() {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="background">
      <ActivityIndicator size="large" />
    </Box>
  );
}

const stacks: Record<Stacks, React.ReactElement> = {
  Loading: <LoadingScreen />,
  App: <AppStack />,
  Auth: <AuthStack />,
  Onboarding: <OnboardingStack />,
};

export function Router() {
  const stack = useRouter();

  const Stack = stacks[stack];

  function renderAnalytics() {
    return (
      <PostHogProvider
        apiKey={env.POSTHOG_API_KEY}
        autocapture={{
          captureScreens: false,
          captureTouches: false,
        }}>
        {Stack}
      </PostHogProvider>
    );
  }

  return (
    <NavigationContainer>
      {env.ENV === 'production' ? renderAnalytics() : Stack}
    </NavigationContainer>
  );
}
