import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Teste</Text>
    </Screen>
  );
}
