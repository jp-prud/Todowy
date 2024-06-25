import { useWindowDimensions } from 'react-native';

import { generateAvatarComposition } from '@utils';
import { useFormContext } from 'react-hook-form';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import {
  Avatar,
  AvatarListPresetUI,
  Box,
  HORIZONTAL_PADDING,
  Icon,
} from '@components';

import { OnboardingFormSchemaTypes } from '../onboardingProfileFormSchema';

interface WrapperOnboardingFormProps {
  children: React.ReactNode;
}

export function WrapperOnboardingForm({
  children,
}: WrapperOnboardingFormProps) {
  const { width } = useWindowDimensions();

  const { watch, setValue } = useFormContext<OnboardingFormSchemaTypes>();

  function handlePressChangeAvatar() {
    const _avatar = generateAvatarComposition();

    setValue('avatar', _avatar, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  return (
    <>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        layout={LinearTransition.springify(2000)}>
        <Box mb="s24" alignSelf="center">
          <Avatar size={120} avatar={watch('avatar') as AvatarListPresetUI} />
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

      <Box alignSelf="center" width={width - HORIZONTAL_PADDING * 2}>
        {children}
      </Box>
    </>
  );
}
