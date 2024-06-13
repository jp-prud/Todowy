import { EmotionalStateEnum } from '@types';
import { useFormContext } from 'react-hook-form';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';

import { CreateReportScreenFormValues } from '../CreateReportScreenFormSchema';

interface EmotionalSelectProps {
  emotionalStateName: EmotionalStateEnum;
  icon: IconProps['name'];
  label: string;
}

export function EmotionalSelect({
  emotionalStateName,
  label,
  icon,
}: EmotionalSelectProps) {
  const {setValue, watch} = useFormContext<CreateReportScreenFormValues>();

  const isActive = watch('emotionalState') === emotionalStateName;

  return (
    <TouchableOpacityBox
      alignItems="center"
      gap="s8"
      activeOpacity={1}
      onPress={() =>
        setValue('emotionalState', emotionalStateName, {
          shouldDirty: true,
          shouldValidate: true,
        })
      }>
      <Box
        width={60}
        height={60}
        backgroundColor="white"
        borderWidth={1.4}
        borderColor={isActive ? 'primary' : 'neutral300'}
        borderRadius="s32"
        pl="s8"
        pt="s8">
        <Icon name={icon} />
      </Box>
      <Text color={isActive ? 'text' : 'subtext'} semiBold>
        {label}
      </Text>
    </TouchableOpacityBox>
  );
}
