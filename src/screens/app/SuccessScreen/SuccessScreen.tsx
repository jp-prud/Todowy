import { Box, Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

import { useSuccessScreen } from './useSuccessScreen';

export function SuccessScreen({
  route,
  navigation,
}: AppScreenProps<'SuccessScreen'>) {
  const {handlePressShareReport} = useSuccessScreen();

  return (
    <Screen backgroundColor="primary">
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Box
          width={86}
          height={86}
          backgroundColor="white"
          borderRadius="s32"
          justifyContent="center"
          alignContent="center"
          mb="s28">
          <Text textAlign="center" preset="headingLarge">
            💖
          </Text>
        </Box>

        <Box alignItems="center">
          <Text color="white" textAlign="center" preset="headingMedium">
            Muito obrigado !!
          </Text>

          <Text color="white" textAlign="center">
            O relatório foi registrado com sucesso.
          </Text>

          <Button
            mt="s48"
            text="Enviar relatório para responsável"
            preset="secondary"
            activeOpacity={0.8}
            onPress={() => handlePressShareReport(route.params.report)}
          />

          <Button
            mt="s16"
            text="Voltar para a tela inicial"
            preset="invertedOutline"
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </Box>
      </Box>
    </Screen>
  );
}
