import { TaskPriority } from '@types';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { PriorityFlagPreset } from './priorityFlagPreset';

interface PriorityFlagProps {
  priority: TaskPriority;
}

export function PriorityFlag({ priority }: PriorityFlagProps) {
  const { container, content } = PriorityFlagPreset[priority];

  return (
    <Box backgroundColor={container} px="s8" py="s4" borderRadius="s32">
      <Text color={content}>{priority}</Text>
    </Box>
  );
}
