import { Pressable } from 'react-native';

import { Box, Button, FormPasswordInput, FormTextInput, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';

import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { useSignInScreen } from './useSignInScreen';

export function SignInScreen({}: AuthScreenProps<'SignInScreen'>) {
  const { control, onSubmit } = useSignInScreen();

  return (
    <Screen>
      <Box justifyContent='center' flex={1}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          layout={LinearTransition.springify()}
        >
          <Box justifyContent="center" alignItems="center" mb="s48">
            <Text mt="s24" preset="headingMedium">Welcome back to</Text>
            <Text preset="headingLarge" color="primary">
              Todowy
            </Text>
          </Box>

          <Box gap="s16" mb="s8">
            <FormTextInput
              control={control}
              name="name"
              label="Email"
              placeholder="Insert your email"
            />
            <FormPasswordInput
              control={control}
              name="name"
              label="Password"
              placeholder="Insert your password"
            />
          </Box>

          <Pressable>
            <Text bold color="primary">
              Forgot your password?
            </Text>
          </Pressable>

          <Box mt="s48" gap="s12">
            <Button text="Log in" onPress={onSubmit} />
            {/* <Button
              text="Criar uma conta"
              onPress={onSignUpPress}
              preset="outline"
            /> */}
          </Box>
        </Animated.View>
      </Box>
    </Screen>
  );
}
