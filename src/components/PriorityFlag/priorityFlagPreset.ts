import { TaskPriority } from '@types';

import { ThemeColors } from '@theme';

interface PriorityFlagUI {
  container: ThemeColors;
  content: ThemeColors;
}

export const PriorityFlagPreset: Record<TaskPriority, PriorityFlagUI> = {
  high: {
    container: 'red200',
    content: 'red800',
  },
  low: {
    container: 'greenLight',
    content: 'greenDark',
  },
  medium: {
    container: 'amber200',
    content: 'amber800',
  },
};
