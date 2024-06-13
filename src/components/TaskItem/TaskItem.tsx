import React from 'react';
import { Pressable } from 'react-native';

import { TaskProps } from '@types';
import { useCompleteTaskUseCase } from '@useCases';
import { formatRelative } from '@utils';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Box, TouchableOpacityBox } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { PriorityFlag } from '../PriorityFlag/PriorityFlag';
import { Text } from '../Text/Text';

interface TaskItemProps {
  task: TaskProps;
  searchTerm?: string;
  onPress?: () => void;
}

export function Task({ task, searchTerm, onPress }: TaskItemProps) {
  const completedTask = useSharedValue(task.status === 'completed');

  const { completeTask } = useCompleteTaskUseCase({
    onSuccess() {
      console.log('Task completed');
    },
    onError() {
      console.log('An error occurred while completing the task');

      completedTask.value = !completedTask.value;
    },
  });

  function onCompletedTask() {
    'worklet';

    completeTask({ id: task.id });
    completedTask.value = !completedTask.value;
  }

  const rActiveButton = useAnimatedStyle(() => {
    return {
      opacity: withTiming(completedTask.value ? 1 : 0),
    };
  });

  const title = hightlightText(task.title, searchTerm);

  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      zIndex={0}>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Pressable onPress={onCompletedTask} style={{ zIndex: 2 }}>
          <Box
            width={38}
            height={38}
            backgroundColor="neutral200"
            borderRadius="s32"
            justifyContent="center"
            alignItems="center">
            <Animated.View style={rActiveButton}>
              <Box
                width={38}
                height={38}
                justifyContent="center"
                alignItems="center"
                borderRadius="s32"
                backgroundColor="primary">
                <Icon name="checkmark" color="white" />
              </Box>
            </Animated.View>
          </Box>
        </Pressable>

        <Box flex={1}>
          <Text numberOfLines={2}>
            {Array.isArray(title) && title.length > 0
              ? title.map(item => item)
              : title}
          </Text>
          <Text preset="paragraphSmall" color="neutral600">
            {formatRelative(task.created_at)} atrás
          </Text>
        </Box>

        <Box ml="s16">
          <PriorityFlag priority={task.priority} />
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}

function hightlightText(title: string, searchTerm?: string) {
  if (!searchTerm || searchTerm === '') {
    return <Text>{title}</Text>;
  }

  const parts = title.split(new RegExp(`(${searchTerm})`, 'gi'));

  return parts.map((part, index) => {
    if (part.toLowerCase() === searchTerm?.toLowerCase()) {
      return (
        <Text color="primary" semiBold key={`${part}-${index}`}>
          {part}
        </Text>
      );
    }

    return <Text key={`${part}-${Math.random()}`}>{part}</Text>;
  });
}
