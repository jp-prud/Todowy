import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

interface CategoryFlagProps {
  label: string;
}

export function CategoryFlag({ label }: CategoryFlagProps) {
  return (
    <Box backgroundColor="purple" px="s8" py="s4" borderRadius="s12">
      <Text preset="paragraphSmall" color="white" semiBold>
        {label}
      </Text>
    </Box>
  );
}
