import React from 'react';

import { useBottomSheet as ExternalLibModal } from '@gorhom/bottom-sheet';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition
} from 'react-native-reanimated';

import {
  Box,
  Button,
  FormTextInput,
  Icon,
  Text,
  TextInput
} from '@components';

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
      <Animated.View
        layout={LinearTransition.delay(100)}
        entering={FadeIn}
        exiting={FadeOut}>
        <Box gap="s20">
          <TextInput
            label="Name"
            description="What's the new category name?"
          />
        </Box>

        <Button
          mt="s24"
          text="It's nice, create!"
        />
      </Animated.View>
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

      <Animated.View
        layout={LinearTransition.delay(100)}
        entering={FadeIn}
        exiting={FadeOut}>
          {renderForm()}
      </Animated.View>
    </Box>
  );
}
