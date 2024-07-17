import { ProjectListProps } from '@types';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

type ProjectItemProps = ProjectListProps & {
  width?: number;
};

export function ProjectItem({ id, name, color, width }: ProjectItemProps) {
  return (
    <Box
      backgroundColor={color}
      p="s12"
      g="s12"
      borderRadius="s16"
      key={id}
      width={width}>
      <Box>
        <Text bold color="white">
          {name}
        </Text>
        <Text color="white">150 tasks</Text>
      </Box>
    </Box>
  );
}
