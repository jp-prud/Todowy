import {Box, Button, FormTextInput, Screen, Text} from '@components';

import {useEditCustomerScreen} from './useEditCustomerScreen';

export function EditCustomerScreenScreen() {
  const {control, onSubmit} = useEditCustomerScreen();

  return (
    <Screen canGoBack title="Edição">
      <Text preset="headingMedium">Editar paciente</Text>

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
        />
      </Box>

      <Button text="Enviar" onPress={onSubmit} />
    </Screen>
  );
}
