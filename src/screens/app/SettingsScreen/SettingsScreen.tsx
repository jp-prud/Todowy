import { Alert, Linking, Pressable } from 'react-native';

import { env } from '@types';

import {
  Avatar,
  Box,
  Button,
  Icon,
  Screen,
  Text,
  TitleBar,
  TouchableOpacityBox,
} from '@components';
import { AppScreenProps } from '@routes';

import { useSettingsScreen } from './useSettingsScreen';

export function SettingsScreen({
  navigation,
}: AppScreenProps<'SettingsScreen'>) {
  const {
    userProfile,
    isLoading: userProfileIsLoading,
    signOut,
  } = useSettingsScreen();

  async function handleOnPressOpenFeedback() {
    const supported = await Linking.canOpenURL(env.FEEDBACK_URL_CANNYO);

    if (supported) {
      await Linking.openURL(env.FEEDBACK_URL_CANNYO);

      return;
    }

    Alert.alert(`Don't know how to open this URL: ${env.FEEDBACK_URL_CANNYO}`);
  }

  return (
    <Screen
      canGoBack
      FooterComponent={
        <Button text="Logout" preset="outline" onPress={signOut} />
      }>
      <Box alignSelf="center" position="relative">
        <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
          <Avatar
            avatar={userProfile?.profile?.avatar}
            size={72}
            isLoading={userProfileIsLoading}
          />

          <Box
            position="absolute"
            right={-14}
            bottom={-14}
            borderRadius="s32"
            backgroundColor="background"
            borderWidth={2}
            borderColor="primary"
            style={{ transform: [{ scale: 0.8 }] }}
            p="s4">
            <Icon name="pencil" color="primary" />
          </Box>
        </Pressable>
      </Box>

      <Box mt="s32" g="s28">
        <Box>
          <TitleBar title="Account Settings" />

          <Box g="s16" mt="s16">
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              px="s16"
              py="s20"
              backgroundColor="gray"
              borderRadius="s16">
              <Text semiBold>Name</Text>
              <Text color="neutral500">{userProfile?.profile.username} </Text>
            </Box>

            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              px="s16"
              py="s20"
              backgroundColor="gray"
              borderRadius="s16">
              <Text semiBold>Email</Text>
              <Text color="neutral500">{userProfile?.email} </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <TitleBar title="Help & Support" />

          <Box g="s16" mt="s16">
            <TouchableOpacityBox
              onPress={handleOnPressOpenFeedback}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              px="s16"
              py="s20"
              backgroundColor="gray"
              borderRadius="s16">
              <Text semiBold>Send a feedback</Text>

              <Icon name="chevron" color="neutral500" />
            </TouchableOpacityBox>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
