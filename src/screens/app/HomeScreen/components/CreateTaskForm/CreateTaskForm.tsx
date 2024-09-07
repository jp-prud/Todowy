import React from 'react';
import { Pressable } from 'react-native';

import { MOCKED_TASKS_PRIORITY } from '@types';
import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';

import {
  ActivityIndicator,
  AnimatedBox,
  BottomSheetHeader,
  Box,
  Button,
  Dropdown,
  FormTextInput,
  Icon,
  RenderIfElse,
  Text
} from '@components';
import { useAppTheme } from '@hooks';

import { useCreateTaskForm } from './useCreateTaskForm';

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
    categoriesIsLoading,
    categories,
    handlePressSelectCategory,
  } = useCreateTaskForm();

  async function onHandleSubmitPress(data: any) {
    await onSubmit(data);

    onClose();
  }

  function renderCategories() {
    const selectedCategory = watch('category');

    return (
      <RenderIfElse
        condition={!categories || categories.length === 0}
        renderIf={<Text preset="paragraphSmall" textAlign='center' color="neutral500">No categories found.</Text>}
        renderElse={<Box flexDirection='row' g="s8" alignItems='center' flexWrap="wrap">
          {categories?.map(category => (
            <Pressable
              style={{
                backgroundColor: selectedCategory === category.name ? colors.primary : colors.neutral200,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 100
              }}
              key={category.id}
              onPress={() => handlePressSelectCategory(category.name)}
            >
              <Text
                color={selectedCategory === category.name ? 'background' : 'neutral800'}
              >
                {category.name}
              </Text>
            </Pressable>
          ))}
        </Box>
        }
      />
    )
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

          <Box g="s4">
            <Text semiBold color="neutral500">
              Categories
            </Text>

            <RenderIfElse
              condition={categoriesIsLoading}
              renderIf={<ActivityIndicator size="small" />}
              renderElse={renderCategories()}
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
    <>
      <BottomSheetHeader title="Creating task" />

      <AnimatedBox>
        <RenderIfElse
          condition={currentStep === 'Form'}
          renderIf={renderForm()}
          renderElse={renderDatePicker()}
        />
      </AnimatedBox>
    </>
  );
}
