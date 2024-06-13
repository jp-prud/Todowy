import React from 'react';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import {
  Avatar,
  Box,
  Icon,
  Screen,
  Text,
  TextInput,
  TitleBar,
  TouchableOpacityBox,
} from '@components';
import { useBottomSheet } from '@hooks';
import { AppScreenProps } from '@routes';

import { AvatarList } from './components/AvatarList';
import { useProfileScreen } from './useProfileScreen';

export function ProfileScreen({}: AppScreenProps<'ProfileScreen'>) {
  const { selectedAvatar } = useProfileScreen();

  const { onOpen, bottomSheetRef, BOTTOM_SHEET_STYLES, renderBackdrop } =
    useBottomSheet();

  return (
    <Screen canGoBack title="Edit Profile">
      <Box justifyContent="center" alignItems="center" gap="s24" mt="s16">
        <Text textAlign="center">
          Choose an avatar to represent you. You can change this at any time.
        </Text>

        <TouchableOpacityBox
          onPress={onOpen}
          alignSelf="center"
          height={106}
          width={106}
          backgroundColor="neutral100"
          justifyContent="center"
          alignItems="center"
          style={{ borderRadius: 90 }}>
          <Avatar
            data={{
              avatar: selectedAvatar,
            }}
            size={72}
          />
          <Box
            width={38}
            height={38}
            borderWidth={1}
            borderColor="neutral300"
            backgroundColor="white"
            position="absolute"
            right={0}
            top="65%"
            justifyContent="center"
            alignItems="center"
            borderRadius="s32">
            <Icon name="pencil" />
          </Box>
        </TouchableOpacityBox>
      </Box>

      <Box mt="s32" gap="s16">
        <TitleBar title="User infos" />
        <TextInput label="Username" />
      </Box>

      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        snapPoints={['35%', '50%']}
        backdropComponent={renderBackdrop}
        animationConfigs={{
          duration: 400,
        }}
        containerStyle={BOTTOM_SHEET_STYLES.container}
        index={-1}>
        <BottomSheetView>
          <Box p="s24">
            <AvatarList />
          </Box>
        </BottomSheetView>
      </BottomSheet>
    </Screen>
  );
}
