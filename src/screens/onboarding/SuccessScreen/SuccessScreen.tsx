import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import { ActivityIndicator, Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function SuccessScreen({}: AppScreenProps<'SuccessScreen'>) {
  return (
    <Screen backgroundColor="primary">
      <Box flex={1} justifyContent="center">
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          layout={LinearTransition.springify()}>
          <Box alignItems="center" g="s4" mb="s32" mt="s12">
            <Text preset="headingMedium" color="white">
              Well done!
            </Text>
            <Text color="white" textAlign="center">
              You've successfully completed your registration proccess
            </Text>
          </Box>

          <ActivityIndicator color="white" size={56} />
        </Animated.View>
      </Box>
    </Screen>
  );
}
