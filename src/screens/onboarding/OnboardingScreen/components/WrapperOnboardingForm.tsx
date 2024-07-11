
import { generateAvatarComposition } from '@utils';
import { useFormContext } from 'react-hook-form';

import {
  Avatar,
  AvatarListPresetUI,
  Box,
  Icon,
  Stepper
} from '@components';

import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { OnboardingFormSchemaTypes } from '../onboardingProfileFormSchema';
import { AvatarPickerStep } from './steps/AvatarPickerStep';
import { OTPStep } from './steps/OTPStep';
import { ProfileFormStep } from './steps/ProfileFormStep';
import { SignUpFormStep } from './steps/SignUpFormStep';

export function WrapperOnboardingForm() {
  return (
    <>
      <Stepper
        steps={[
          {content: (
            <>
              <PreviewAvatar />
              <AvatarPickerStep />
            </>
          )},
          {content: (
            <>
              <PreviewAvatar />
              <ProfileFormStep />
            </>
          )},
          { content: <SignUpFormStep /> },
          { content: <OTPStep /> },
        ]}
      />
    </>
  );
}

function PreviewAvatar() {
  const { watch, setValue } = useFormContext<OnboardingFormSchemaTypes>();

  function handlePressChangeAvatar() {
    const _avatar = generateAvatarComposition();

    setValue('avatarStep', _avatar, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  return (
    <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        layout={LinearTransition.springify(2000)}
      >
        <Box mb="s24" alignSelf="center">
          <Avatar size={120} avatar={watch('avatarStep') as AvatarListPresetUI} />
          <Box
            position="absolute"
            right={-14}
            top={-14}
            borderRadius="s32"
            backgroundColor="primary"
            p="s4">
            <Icon
              name="reload"
              color="white"
              onPress={handlePressChangeAvatar}
            />
          </Box>
        </Box>
      </Animated.View>
  );
}