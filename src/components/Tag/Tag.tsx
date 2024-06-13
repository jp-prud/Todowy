import { Box, Icon, Text } from '@components';

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <Box
      flexDirection="row"
      gap="s8"
      px="s8"
      backgroundColor="neutral200"
      borderRadius="s32"
      alignItems="center">
      <Icon name="tag" color="neutral700" />
      <Text color="neutral700">{label}</Text>
    </Box>
  );
}
