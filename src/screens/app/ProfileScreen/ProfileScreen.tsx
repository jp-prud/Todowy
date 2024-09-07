import React from 'react';

import { Avatar, AvatarListPicker, Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

import { useProfileScreen } from './useProfileScreen';

export function ProfileScreen({}: AppScreenProps<'ProfileScreen'>) {
  const { userProfile, isLoading, handleSelectAvatar } = useProfileScreen();

  return (
    <Screen canGoBack title="Edit Profile" isLoading={isLoading}>
      <Box justifyContent="center" alignItems="center" gap="s24" mt="s16">
        <Text textAlign="center">
          Choose an avatar to represent you. You can change this at any time.
        </Text>

        <Box mb="s24" alignSelf="center">
          <Avatar size={80} avatar={userProfile!.profile.avatar} />
        </Box>
      </Box>

      <AvatarListPicker onChangeAvatar={handleSelectAvatar} />
    </Screen>
  );
}
