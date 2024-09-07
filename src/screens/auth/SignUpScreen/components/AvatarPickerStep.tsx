import React from 'react';

import { useFormContext } from 'react-hook-form';

import {
  AnimatedBox,
  Avatar,
  AvatarListPicker,
  AvatarListPresetUI,
  Box,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  useStepper,
} from '@components';

import { SignUpFormSchemaTypes } from '../signUpFormSchema';

export function AvatarPickerStep() {
  const { nextStep } = useStepper();

  const { setValue, getValues } = useFormContext<SignUpFormSchemaTypes>();

  const profileAvatar = getValues('profile.avatar');

  function handlePressChangeAvatar(_avatar: AvatarListPresetUI) {
    setValue('profile.avatar', {
      ..._avatar,
      icon: String(_avatar.icon),
    });
  }

  async function handleOnPressNext() {
    if (profileAvatar) {
      nextStep();
    }
  }

  console.log(profileAvatar);

  return (
    <>
      <StepperContent>
        <PreviewAvatar />

        <StepperHeader
          title="Choose Your Icon"
          subtitle="Let's get you started"
        />

        <AvatarListPicker onChangeAvatar={handlePressChangeAvatar} />
      </StepperContent>

      <StepperFooter>
        <StepperNextButton
          text="It's look cute"
          onPress={handleOnPressNext}
          disabled={profileAvatar.icon === ''}
        />
      </StepperFooter>
    </>
  );
}

export function PreviewAvatar() {
  const { watch } = useFormContext<SignUpFormSchemaTypes>();

  // function handlePressChangeAvatar() {
  //   const _avatar = generateAvatarComposition();

  //   setValue('profile.avatar', _avatar, {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  // }

  const avatar = watch('profile.avatar');

  return (
    <AnimatedBox style={{ marginBottom: -16 }}>
      <Box alignSelf="center">
        {avatar.icon !== '' ? (
          <Avatar
            size={120}
            avatar={watch('profile.avatar') as AvatarListPresetUI}
          />
        ) : (
          <Box
            width={120}
            height={120}
            backgroundColor="neutral200"
            borderRadius="s16"
          />
        )}

        {/* <Box
          position="absolute"
          right={-14}
          top={-14}
          borderRadius="s32"
          backgroundColor="primary"
          p="s4">
          <Icon name="reload" color="white" onPress={handlePressChangeAvatar} />
        </Box>  */}
      </Box>
    </AnimatedBox>
  );
}
