import React from 'react';

import { useBottomSheet as ExternalLibModal } from '@gorhom/bottom-sheet';
import { MOCKED_TASKS_PRIORITY } from '@types';

import { Box, Button, Dropdown, FormTextInput, Icon, Text } from '@components';

import { useCreateTaskForm } from '../useCreateTaskForm';

interface CreateTaskFormProps {
  onClose: () => void;
}

export function CreateTaskForm({ onClose }: CreateTaskFormProps) {
  const {
    onSubmit,
    createTaskLoading,
    createTaskControl,
    isValidCreateTaskForm,
    handlePressSelectPriority,
  } = useCreateTaskForm();

  const { close } = ExternalLibModal();

  async function onHandleSubmitPress(data: any) {
    await onSubmit(data);

    onClose();
  }

  function handlePressCloseForm() {
    close();
  }

  return (
    <>
      <Box p="s16">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mb="s24">
          <Text preset="headingMedium">Creating task</Text>

          <Icon name="close" color="black400" onPress={handlePressCloseForm} />
        </Box>

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

          <Dropdown
            label="Priority"
            closeModalWhenSelectedItem
            onChange={handlePressSelectPriority}
            data={MOCKED_TASKS_PRIORITY}
          />
        </Box>

        <Button
          mt="s24"
          text="Create"
          loading={createTaskLoading}
          onPress={onHandleSubmitPress}
          disabled={!isValidCreateTaskForm}
        />
      </Box>
    </>
  );
}
