import React from 'react';

import { generateAvatarComposition } from '@utils';

import {
  Avatar,
  AvatarListPicker,
  Box,
  Button,
  HORIZONTAL_PADDING,
  Icon,
  Screen,
  Text,
  TextInput,
  TitleBar,
} from '@components';
import { AppScreenProps } from '@routes';

import { useProfileScreen } from './useProfileScreen';

export function ProfileScreen({}: AppScreenProps<'ProfileScreen'>) {
  const { userProfile, isLoading, handleSelectAvatar, signOut } = useProfileScreen();

  function handlePressChangeAvatar() {
    const _avatar = generateAvatarComposition();

    handleSelectAvatar(_avatar);
  }

  return (
    <Screen 
      canGoBack 
      title="Edit Profile" 
      isLoading={isLoading} 
      FooterComponent={<Button text="Logout" preset="outline" onPress={signOut} />}
      footerContainerStyle={{padding: HORIZONTAL_PADDING }}
    >
      <Box justifyContent="center" alignItems="center" gap="s24" mt="s16">
        <Text textAlign="center">
          Choose an avatar to represent you. You can change this at any time.
        </Text>

        <Box mb="s24" alignSelf="center">
          <Avatar size={120} avatar={userProfile!.profile.avatar} />
          <Box
            position="absolute"
            right={-14}
            top={-14}
            borderRadius="s32"
            backgroundColor="primary"
            p="s4">
            <Icon
              name="reload"
              color="white"
              onPress={handlePressChangeAvatar}
            />
          </Box>
        </Box>
      </Box>

      <AvatarListPicker onChangeAvatar={handleSelectAvatar} />

      <Box mt="s32" gap="s16">
        <TitleBar title="Your profile" />

        <TextInput
          label="Username"
          value={`@${userProfile!.profile.username}`}
          pointerEvents="none"
          focusable={false}
          readOnly
        />

      </Box>
    </Screen>
  );
}
