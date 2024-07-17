import React from 'react';
import { Pressable } from 'react-native';

import { useBottomSheet as ExternalLibModal } from '@gorhom/bottom-sheet';
import { MOCKED_TASKS_PRIORITY } from '@types';
import dayjs from 'dayjs';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import DateTimePicker from 'react-native-ui-datepicker';

import {
  AnimatedBox,
  Box,
  Button,
  Dropdown,
  FormTextInput,
  Icon,
  RenderIfElse,
  Text,
} from '@components';
import { useAppTheme } from '@hooks';

import { useCreateTaskForm } from '../useCreateTaskForm';

interface CreateTaskFormProps {
  onClose: () => void;
}

export function CreateTaskForm({ onClose }: CreateTaskFormProps) {
  const { colors } = useAppTheme();

  const {
    onSubmit,
    createTaskLoading,
    createTaskControl,
    isValidCreateTaskForm,
    handlePressSelectPriority,
    currentStep,
    handlePressToggleStep,
    watch,
    handlePressChangeDate,
  } = useCreateTaskForm();

  const { close } = ExternalLibModal();

  async function onHandleSubmitPress(data: any) {
    await onSubmit(data);

    onClose();
  }

  function handlePressCloseForm() {
    if (currentStep === 'DatePicker') {
      handlePressToggleStep();
    }

    close();
  }

  function renderForm() {
    return (
      <AnimatedBox>
        <Box gap="s20">
          <FormTextInput
            label="Title"
            name="title"
            control={createTaskControl}
            description="What is the task about?"
          />

          <FormTextInput
            label="Description"
            name="description"
            control={createTaskControl}
            numberOfLines={2}
            multiline
            textAlignVertical="top"
            enterKeyHint="enter"
          />

          <Box flexDirection="row" alignItems="center" g="s16">
            <Pressable onPress={handlePressToggleStep} style={{ flex: 1 }}>
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
                  <Text>
                    {dayjs(watch('due_date')).format('MMM D, h:mm A')}
                  </Text>
                  <Icon name="calendar" color="neutral600" />
                </Box>
              </Box>
            </Pressable>

            <Dropdown
              label="Priority"
              labelField="label"
              valueField="value"
              closeModalWhenSelectedItem
              value={watch('priority')}
              onChange={handlePressSelectPriority}
              data={MOCKED_TASKS_PRIORITY}
            />
          </Box>
        </Box>

        <Button
          mt="s24"
          text="Create Task"
          loading={createTaskLoading}
          onPress={onHandleSubmitPress}
          disabled={!isValidCreateTaskForm}
        />
      </AnimatedBox>
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

        <Button
          text="Confirm due date"
          onPress={handlePressToggleStep}
          mt="s24"
        />
      </>
    );
  }

  return (
    <Box p="s16">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="s24">
        <Text preset="headingMedium">Creating task</Text>

        <Icon name="close" color="black400" onPress={handlePressCloseForm} />
      </Box>

      <AnimatedBox>
        <RenderIfElse
          condition={currentStep === 'Form'}
          renderIf={renderForm()}
          renderElse={renderDatePicker()}
        />
      </AnimatedBox>
    </Box>
  );
}
