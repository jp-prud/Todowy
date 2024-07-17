import { Pressable } from 'react-native';


import {
  AnimatedBox,
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import { AuthScreenProps } from '@routes';

import { useSignInScreen } from './useSignInScreen';

export function SignInScreen({ navigation }: AuthScreenProps<'SignInScreen'>) {
  const { control, onSubmit, isSubmitting } = useSignInScreen();

  return (
    <Screen>
      <Box justifyContent="center" flex={1}>
        <AnimatedBox>
          <Box justifyContent="center" alignItems="center" mb="s56">
            <Text mt="s24" preset="headingMedium">
              Welcome to
            </Text>
            <Text preset="headingLarge" color="primary">
              Todowy
            </Text>
          </Box>

          <Box gap="s16" mb="s8">
            <FormTextInput
              control={control}
              name="email"
              label="Email"
              placeholder="Insert your email"
            />
            <FormPasswordInput
              control={control}
              name="password"
              label="Password"
              placeholder="Insert your password"
            />
          </Box>

          <Pressable onPress={() => navigation.navigate("RecoveryPasswordScreen")}>
            <Text bold color="primary">
              Forgot your password?
            </Text>
          </Pressable>

          <Box mt="s32" gap="s16">
            <Button 
              text="Login" 
              onPress={onSubmit} 
              disabled={isSubmitting} 
              loading={isSubmitting} 
            />
            <Button 
              text="I'm new. Let's start" 
              preset="outline" 
              onPress={() => navigation.navigate('SignUpScreen')} 
              disabled={isSubmitting}
            />
          </Box>
        </AnimatedBox>
      </Box>
    </Screen>
  );
}
