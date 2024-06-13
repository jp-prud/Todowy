import React from 'react';

import { Box, Button, FormTextInput, Screen, Text } from '@components';

import { useCreateCustomerScreen } from './useCreateCustomerScreen';

export function CreateCustomerScreen() {
  const {control, onSubmit, isLoading} = useCreateCustomerScreen();

  return (
    <Screen
      canGoBack
      title="Criação"
      footerContainerStyle={{paddingHorizontal: 24}}
      FooterComponent={
        <Button text="Enviar" onPress={onSubmit} loading={isLoading} />
      }>
      <Box gap="s4">
        <Text preset="headingMedium">Criar paciente</Text>
        <Text color="subtext">
          Preencha os campos abaixo para criar um novo paciente.
        </Text>
      </Box>

      <Box gap="s16" my="s32">
        <FormTextInput
          control={control}
          name="name"
          placeholder="Insira o nome"
        />

        <FormTextInput
          control={control}
          name="phone"
          placeholder="Insira o telefone"
        />

        <FormTextInput
          control={control}
          name="room"
          placeholder="Insira o número do quarto"
          keyboardType="numeric"
        />

        <FormTextInput
          control={control}
          name="age"
          placeholder="Insira a idade"
          keyboardType="numeric"
        />
      </Box>
    </Screen>
  );
}
