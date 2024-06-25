import { useFormContext } from 'react-hook-form';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

import {
  AvatarListPicker,
  AvatarListPresetUI,
  Box,
  Button,
  Text,
} from '@components';

import { OnboardingFormSchemaTypes } from '../onboardingProfileFormSchema';

import { StepProps } from './stepTypes';

export function AvatarPicker({
  onPressNextStep,
  isLast,
}: Omit<StepProps, 'Component'>) {
  const { setValue } = useFormContext<OnboardingFormSchemaTypes>();

  function handlePressChangeAvatar(_avatar: AvatarListPresetUI) {
    setValue('avatar', _avatar, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition.springify()}>
      <Box alignItems="center" g="s4">
        <Text preset="headingMedium">Choose Your Icon</Text>
        <Text color="neutral500">Let's get you started</Text>
      </Box>

      <AvatarListPicker mt="s24" onChangeAvatar={handlePressChangeAvatar} />

      <Button
        text="It's look cute"
        mt="s32"
        onPress={() => onPressNextStep(isLast)}
      />
    </Animated.View>
  );
}
