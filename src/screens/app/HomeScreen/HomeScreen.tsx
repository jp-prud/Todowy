import React from 'react';

import { Box, Screen } from '@components';
import { AppScreenProps } from '@routes';

import { FloatingButton, SliderTaskList } from './components';
import { HomeScreenProvider, useHomeScreen } from './useHomeScreen';

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  const { globalLoading } = useHomeScreen();

  return (
    <Screen isLoading={globalLoading}>
      <HomeScreenProvider>
        <FloatingButton />

        <Box zIndex={-1} flex={1}>
          <SliderTaskList />
        </Box>
      </HomeScreenProvider>
    </Screen>
);
}
