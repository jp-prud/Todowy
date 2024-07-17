import React from 'react';

import { useBottomSheet as ExternalLibModal } from '@gorhom/bottom-sheet';

import { AnimatedBox, Box, Button, Icon, Text, TextInput } from '@components';

interface CreateCategoryFormProps {
  onClose: () => void;
}

export function CreateCategoryForm({ onClose }: CreateCategoryFormProps) {
  const { close } = ExternalLibModal();

  async function onHandleSubmitPress(data: any) {
    // await onSubmit(data);

    onClose();
  }

  function handlePressCloseForm() {
    close();
  }

  function renderForm() {
    return (
      <AnimatedBox>
        <Box gap="s20">
          <TextInput label="Name" description="What's the new category name?" />
        </Box>

        <Button mt="s24" text="It's nice, create!" />
      </AnimatedBox>
    );
  }

  return (
    <Box p="s16">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="s24">
        <Text preset="headingMedium">Creating category</Text>

        <Icon name="close" color="black400" onPress={handlePressCloseForm} />
      </Box>

      <AnimatedBox>
        {renderForm()}
      </AnimatedBox>
    </Box>
  );
}
