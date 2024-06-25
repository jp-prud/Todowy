import React from 'react';
import { Pressable } from 'react-native';

import { MOCKED_TASKS_PRIORITY } from '@types';
import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';

import {
  Box,
  Button,
  Dropdown,
  FormTextInput,
  Icon,
  RenderIfElse,
  Screen,
  Text,
} from '@components';
import { useAppTheme } from '@hooks';
import { AppScreenProps } from '@routes';

import { useEditTaskScreen } from './useEditTaskScreen';

export function EditTaskScreen({ route }: AppScreenProps<'EditTaskScreen'>) {
  const { params } = route;

  const {
    editTaskLoading,
    onPressSubmit,
    isLoading,
    currentStep,
    editTaskControl,
    watch,
    handlePressChangeDate,
    handleToggleStep,
    handlePressSelectPriority,
  } = useEditTaskScreen(params.taskId);

  const { colors } = useAppTheme();

  function renderForm() {
    return (
      <Box gap="s20">
        <FormTextInput
          label="Title"
          name="title"
          control={editTaskControl}
          description="What is the task about?"
        />

        <FormTextInput
          label="Description"
          name="description"
          control={editTaskControl}
          numberOfLines={2}
          multiline
          textAlignVertical="top"
          enterKeyHint="enter"
        />

        <Box flexDirection="row" alignItems="center" g="s16">
          <Pressable style={{ flex: 1 }}>
            <Box alignItems="stretch" g="s4">
              <Text semiBold color="neutral500">
                Deadline
              </Text>

              <Box
                borderWidth={1}
                borderColor="neutral300"
                borderRadius="s16"
                px="s16"
                py="s16"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                g="s8">
                <Text>{dayjs(watch('due_date')).format('MMM D, h:mm A')}</Text>
                <Icon name="calendar" color="neutral600" />
              </Box>
            </Box>
          </Pressable>

          <Dropdown
            label="Priority"
            closeModalWhenSelectedItem
            value={watch('priority')}
            // @ts-ignore
            onChange={handlePressSelectPriority}
            data={MOCKED_TASKS_PRIORITY}
          />
        </Box>
      </Box>
    );
  }

  function renderDatePicker() {
    const minDateSelector = dayjs()
      .date(dayjs().date() - 1)
      .toDate();

    return (
      <>
        <DateTimePicker
          mode="single"
          headerButtonsPosition="right"
          headerButtonColor={colors.primary}
          selectedItemColor={colors.primary}
          date={watch('due_date')}
          minDate={minDateSelector}
          onChange={params => handlePressChangeDate(params.date)}
          timePicker
          displayFullDays
        />

        <Button text="Confirm due date" onPress={handleToggleStep} mt="s24" />
      </>
    );
  }

  return (
    <Screen
      canGoBack
      title="Update Task"
      isLoading={isLoading}
      FooterComponent={
        <Button
          text="I'm finish, update task"
          onPress={onPressSubmit}
          loading={editTaskLoading}
        />
      }
      footerContainerStyle={{ padding: 24 }}>
      <RenderIfElse
        condition={currentStep === 'Form'}
        renderIf={renderForm()}
        renderElse={renderDatePicker()}
      />
    </Screen>
  );
}
