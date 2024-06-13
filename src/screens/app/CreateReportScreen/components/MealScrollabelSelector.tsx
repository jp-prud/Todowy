import React from 'react';
import { ScrollView } from 'react-native';

import { useFormContext } from 'react-hook-form';

import { Box, BoxProps, Text, TouchableOpacityBox } from '@components';

import {
  CreateReportScreenFormValues,
  mealsStateEnum,
} from '../CreateReportScreenFormSchema';

interface MealScrollabelSelectorProps {
  title: string;
  options?: typeof mealsStateEnum;
  formReferenceName: keyof CreateReportScreenFormValues['mealsState'];
}

export function MealScrollabelSelector({
  title,
  formReferenceName,
  options = ['ate', 'didntEat', 'ateLittle', 'refused'],
}: MealScrollabelSelectorProps) {
  const {setValue, watch} = useFormContext<CreateReportScreenFormValues>();

  const MAPPED_OPTIONS_LANGUAGE = {
    ate: 'Comeu',
    didntEat: 'Não comeu',
    ateLittle: 'Comeu pouco',
    refused: 'Recusou',
  };

  return (
    <Box>
      <Text semiBold color="neutral700" mb="s12">
        {title}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 16}}>
        {options.map(option => {
          const isActive =
            watch('mealsState')[formReferenceName] === option && $activeBlock;

          return (
            <TouchableOpacityBox
              key={option}
              delayPressIn={0}
              delayPressOut={0}
              delayLongPress={0}
              activeOpacity={1}
              paddingHorizontal="s24"
              paddingVertical="s14"
              borderWidth={1.6}
              borderColor={isActive ? 'primary' : 'neutral300'}
              borderRadius="s16"
              onPress={() =>
                setValue(
                  'mealsState',
                  {
                    ...watch('mealsState'),
                    [formReferenceName]: option,
                  },
                  {
                    shouldDirty: true,
                    shouldValidate: true,
                  },
                )
              }>
              <Text semiBold color={isActive ? 'primary' : 'subtext'}>
                {MAPPED_OPTIONS_LANGUAGE[option]}
              </Text>
            </TouchableOpacityBox>
          );
        })}
      </ScrollView>
    </Box>
  );
}

const $activeBlock: BoxProps = {
  borderColor: 'amber1000',
};
