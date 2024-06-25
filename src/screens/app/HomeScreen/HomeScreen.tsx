import React from 'react';

import {
  Avatar,
  Box,
  FormTextInput,
  Icon,
  Screen,
  Text,
  TitleBar,
  TouchableOpacityBox,
} from '@components';
import { AppScreenProps } from '@routes';

import { AddTaskButton, SliderTaskList } from './components';
import { useHomeScreen } from './useHomeScreen';

export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>) {
  const {
    authCredentials,
    filteredTasks,
    control,
    searchTerm,
    isAuthCredentialLoading,
  } = useHomeScreen();

  return (
    <Screen isLoading={isAuthCredentialLoading}>
      <AddTaskButton />
      <Box zIndex={-1} flex={1}>
        <Box mb="s32">
          <Box alignItems="center" flexDirection="row" gap="s16">
            <TouchableOpacityBox
              width="auto"
              onPress={() => navigation.navigate('ProfileScreen')}>
              <Avatar avatar={authCredentials!.avatar} size={46} />
            </TouchableOpacityBox>

            <Box>
              <Text preset="paragraphSmall" color="neutral500">
                Welcome, {authCredentials?.username}!
              </Text>
              <Text semiBold>Lets get productive</Text>
            </Box>
          </Box>
        </Box>

        <FormTextInput
          control={control}
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

          <Box
            width={24}
            height={24}
            backgroundColor="neutral100"
            borderRadius="s16"
            justifyContent="center"
            alignItems="center">
            <Text semiBold>{filteredTasks.length}</Text>
          </Box>
        </Box>

        <SliderTaskList data={filteredTasks} searchTerm={searchTerm} />
      </Box>
    </Screen>
  );
}
