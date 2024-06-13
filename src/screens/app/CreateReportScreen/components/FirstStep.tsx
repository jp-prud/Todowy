import React from 'react';

import { Box, Text } from '@components';

import { EmotionalSelect } from './EmotionalSelect';
import { MealScrollabelSelector } from './MealScrollabelSelector';

export function FirstStep() {
  return (
    <>
      <Box gap="s4">
        <Text preset="headingMedium">Como foi o dia do paciente ?</Text>
        <Text color="subtext">
          Dia {new Date().toLocaleDateString('pt-BR')}
        </Text>
      </Box>

      <Box
        my="s36"
        flexDirection="row"
        alignSelf="center"
        justifyContent="space-between"
        alignItems="center"
        width={247}>
        <EmotionalSelect
          emotionalStateName="sad"
          icon="sadEmoji"
          label="Triste"
        />

        <EmotionalSelect
          emotionalStateName="neutral"
          icon="smileEmoji"
          label="Normal"
        />

        <EmotionalSelect
          emotionalStateName="happy"
          icon="happyEmoji"
          label="Feliz"
        />
      </Box>

      <Box>
        <Text preset="headingSmall" mb="s20">
          Alimentação
        </Text>

        <Box gap="s16">
          <MealScrollabelSelector
            title="Café da manhã"
            formReferenceName="breakfast"
          />

          <MealScrollabelSelector title="Almoço" formReferenceName="lunch" />

          <MealScrollabelSelector
            title="Lanche da tarde"
            formReferenceName="afternoonSnack"
          />

          <MealScrollabelSelector title="Jantar" formReferenceName="dinner" />
        </Box>
      </Box>
    </>
  );
}
