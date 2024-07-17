
import { AnimatedBox, Box, Button, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccessScreen({ navigation, route: { params } }: AuthScreenProps<'SuccessScreen'>) {
  const { navigate } = navigation;

  const { title, subtitle } = params

  return (
    <Screen backgroundColor="primary">
      <Box flex={1} justifyContent="center">
        <AnimatedBox>
          <Box alignItems="center" g="s4">
            <Text preset="headingMedium" color="white">{title}</Text>

            <Text color="white" textAlign="center">
              {subtitle}
            </Text>
          </Box>

          
        </AnimatedBox>
      </Box>
      <Button text="Go to Login" preset="secondary" onPress={() => navigate('SignInScreen')} />
    </Screen>
  );
}
