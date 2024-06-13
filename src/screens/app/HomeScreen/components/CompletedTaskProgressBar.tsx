import { StyleSheet } from 'react-native';

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Box, Text } from '@components';

interface CompletedTaskProgressBarProps {
  completedTasks: number;
  totalTasks: number;
}

export function CompletedTaskProgressBar({
  completedTasks,
  totalTasks,
}: CompletedTaskProgressBarProps) {
  const progress = useSharedValue(0);

  const rProgressStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [25, 50, 75],
      ['#c0c2fc', '#8883f6', '#4c33cc'],
      'HSV',
    );

    return {
      width: withTiming(`${progress.value}%`),
      backgroundColor: withTiming(backgroundColor),
    };
  });

  // function() {
  //   'worklet';

  //         if (progress.value >= 100) {
  //           return;
  //         }

  //         progress.value = 100 / totalTasks + progress.value;
  // }

  return (
    <Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="s16">
        <Text>Tarefas finalizadas</Text>

        <Text>
          {completedTasks}/{totalTasks}
        </Text>
      </Box>
      <Box height={24} backgroundColor="neutral200" mb="s32" borderRadius="s16">
        <Animated.View style={[styles.progressBar, rProgressStyle]} />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    height: 24,
    borderRadius: 16,
  },
});
