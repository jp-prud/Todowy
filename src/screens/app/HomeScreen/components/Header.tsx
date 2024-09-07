import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useGetUserProfile } from '@useCases';
import { z } from 'zod';

import {
  Avatar,
  BottomSheet,
  BottomSheetFooter,
  BottomSheetHeader,
  Box,
  Button,
  FormTextInput,
  Icon,
  Text,
  TitleBar,
  TouchableOpacityBox
} from '@components';
import { useBottomSheet } from '@hooks';

import { useHomeScreen } from '../useHomeScreen';

export const SearchForm = z.object({
  searchTerm: z.string(),
});

export type SearchFormSchemaTypes = z.infer<typeof SearchForm>;

export const searchFormDefaultValues: SearchFormSchemaTypes = {
  searchTerm: '',
};

export function Header() {
  const { filteredTasks, searchControl, filterOptions } = useHomeScreen();

  const { userProfile, isLoading: userProfileIsLoading } = useGetUserProfile();

  const navigation = useNavigation();

  const { bottomSheetRef, onClose, onOpen } = useBottomSheet();

  return (
    <>
      <Box zIndex={-1} flex={1} backgroundColor="background">
        <Box mb="s20" flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Box alignItems="center" flexDirection="row" gap="s16">
            <TouchableOpacityBox
              width="auto"
              onPress={() => navigation.navigate('SettingsScreen')}>
              <Avatar
                avatar={userProfile?.profile?.avatar}
                size={46}
                isLoading={userProfileIsLoading}
              />
            </TouchableOpacityBox>

            <Box>
              <Text preset="paragraphSmall" color="neutral500">
                Welcome,{' '}
                {userProfileIsLoading ? '...' : userProfile?.profile.username}!
              </Text>
              <Text semiBold>Lets get productive</Text>
            </Box>
          </Box>

          <Icon name="archiveBox"  />
        </Box>

        <FormTextInput
          control={searchControl}
          name="searchTerm"
          placeholder="Search for a task"
          RightComponent={<Icon name="search" color="neutral600" />}
        />

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="s16"
          mt="s32">
          <TitleBar title="Your tasks" />

          <Box flexDirection="row" g="s12" alignItems="center">
            <Box
              width={28}
              height={28}
              backgroundColor="gray"
              borderRadius="s16"
              justifyContent="center"
              alignItems="center">
              <Text preset="paragraphSmall" semiBold>
                {filteredTasks.length}
              </Text>
            </Box>

            <Box
              width={28}
              height={28}
              backgroundColor="gray"
              borderRadius="s16"
              justifyContent="center"
              alignItems="center">
              <Box style={{ transform: [{ scale: 0.8 }] }}>
                <Icon name="filter" color="neutral900" onPress={onOpen} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <BottomSheet ref={bottomSheetRef}>
        <BottomSheetHeader
          title="Filter by"
          description="Filter your tasks by priority. Reset to default to see all tasks."
          onClose={onClose}
        />

        <Box g="s4">
          <TitleBar title="Status" />

          <Box flexDirection='row' g="s8">
            <Button text="Pending" flex={1} preset="outline" />
            <Button text="Completed" flex={1} preset="outline" />
          </Box>
        </Box>

        <BottomSheetFooter>
          <Button
            text="Reset filters"
            preset="outline"
            onPress={onClose}
            flex={1}
          />
          <Button text="Filter" onPress={onClose} flex={1} />
        </BottomSheetFooter>
      </BottomSheet>
    </>
  );
}
