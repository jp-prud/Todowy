import React from 'react';

import { useFormContext } from 'react-hook-form';

import {
  Box,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  StepperPreviousButton,
  Text,
  TouchableOpacityBox,
  useStepper,
} from '@components';
import { ThemeColors } from '@theme';

import { CreateProjectFormSchemaTypes } from '../../createProjectFormSchema';

const COLOR_PICKER_OPTIONS: ThemeColors[] = [
  'darkRed',
  'purple',
  'lightPurple',
  'primary',
  'blue',
  'lightBlue',
  'pink',
  'amber400',
  'iconGreen',
  'green',
  'yellow',
  'amber200',
  'lightRed',
  'text',
  'subtext',
];

export function ColorPickerStep() {
  const {
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useFormContext<CreateProjectFormSchemaTypes>();

  const selectedColor = watch('color');

  const { nextStep } = useStepper();

  function handleOnPressColor(color: ThemeColors) {
    setValue('color', color);
  }

  async function handleOnPressNext() {
    console.log('selectedColor', selectedColor);

    if (selectedColor !== '') {
      nextStep();
    }
  }

  return (
    <>
      <StepperContent>
        <StepperHeader
          title="Choose a color"
          subtitle="Great. Now choose a color for your project and you can always edit this later."
        />

        <Box
          flexDirection="row"
          flexWrap="wrap"
          g="s16"
          justifyContent="center"
          alignItems="center">
          {COLOR_PICKER_OPTIONS.map(color => (
            <TouchableOpacityBox
              key={color}
              onPress={() => handleOnPressColor(color)}
              width={48}
              height={48}
              borderRadius="s24"
              backgroundColor={color}
              justifyContent="center"
              alignItems="center">
              {selectedColor === color && (
                <Box
                  width={32}
                  height={32}
                  borderWidth={4}
                  borderColor="white"
                  borderRadius="s16"
                />
              )}
            </TouchableOpacityBox>
          ))}
        </Box>

        {errors.color && <Text color="error">{errors.color.message}</Text>}
      </StepperContent>

      <StepperFooter>
        <StepperPreviousButton disabled={isSubmitting} />
        <StepperNextButton
          onPress={handleOnPressNext}
          disabled={isSubmitting || !selectedColor}
        />
      </StepperFooter>
    </>
  );
}
