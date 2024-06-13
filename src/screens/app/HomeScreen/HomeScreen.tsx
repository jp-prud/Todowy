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
    isLoading,
    searchTerm,
    onDetailsTask,
  } = useHomeScreen();

  return (
    <Screen isLoading={isLoading}>
      <AddTaskButton />
      <Box zIndex={-1}>
        <Box mb="s32">
          <Box alignItems="center" flexDirection="row" gap="s16">
            <TouchableOpacityBox
              width="auto"
              onPress={() => navigation.navigate('ProfileScreen')}>
              <Avatar avatar={authCredentials?.avatar} />
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
          justifyContent="space-between">
          <TitleBar title="Your tasks" mb="s32" mt="s32" />

          <Box
            width={28}
            height={28}
            backgroundColor="neutral200"
            borderRadius="s16"
            justifyContent="center"
            alignItems="center">
            <Text semiBold>{filteredTasks.length}</Text>
          </Box>
        </Box>

        <SliderTaskList
          data={filteredTasks}
          searchTerm={searchTerm}
          onPressItem={onDetailsTask}
        />
      </Box>
    </Screen>
  );
}
