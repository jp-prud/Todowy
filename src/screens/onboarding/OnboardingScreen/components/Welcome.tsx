import { ONBOARDING_MOCKED_TASKS } from '@types';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import { Box, Button, Task, Text } from '@components';

interface WelcomeProps {
  onPressStartOnboarding: () => void;
}

export function Welcome({ onPressStartOnboarding }: WelcomeProps) {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition.springify(2000)}>
      <Box gap="s20" width={320} justifyContent="flex-start">
        <Box alignItems="center" g="s4" mb="s16" mt="s12">
          <Text preset="headingMedium">Create a task</Text>
          <Text color="neutral500" textAlign="center">
            Write down your task so you don't forget.
          </Text>
        </Box>

        <Task task={ONBOARDING_MOCKED_TASKS[0]} />

        <Button text="Let's start" mt="s16" onPress={onPressStartOnboarding} />
      </Box>
    </Animated.View>
  );
}
