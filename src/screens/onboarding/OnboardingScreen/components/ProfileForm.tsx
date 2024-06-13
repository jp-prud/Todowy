import { useFormContext } from 'react-hook-form';
import Animated, {
  FadeInRight,
  FadeOutRight,
  LinearTransition,
} from 'react-native-reanimated';

import { Box, Button, FormTextInput, Text } from '@components';

import { OnboardingFormSchemaTypes } from '../onboardingProfileFormSchema';

import { StepProps } from './stepTypes';

export function ProfileForm({
  onPressNextStep,
  onPressBackStep,
  isLast,
}: Omit<StepProps, 'Component'>) {
  const {
    control,
    watch,
    formState: { isSubmitting },
  } = useFormContext<OnboardingFormSchemaTypes>();

  return (
    <Animated.View
      entering={FadeInRight}
      exiting={FadeOutRight}
      layout={LinearTransition.springify()}>
      <Box alignItems="center" g="s16" mb="s10">
        <Text preset="headingMedium" textAlign="center">
          @{watch('username')}
        </Text>
        <Text preset="paragraphLarge" textAlign="center" color="neutral600">
          Insert your username
        </Text>
      </Box>

      <FormTextInput control={control} prefix="@" name="username" />

      <Box g="s16" mt="s16" flexDirection="row">
        <Button
          flex={1}
          text="Back"
          preset="outline"
          onPress={onPressBackStep}
          disabled={isSubmitting}
          loading={isSubmitting}
        />
        <Button
          flex={1}
          text="Let's start"
          onPress={() => onPressNextStep(isLast)}
          loading={isSubmitting}
        />
      </Box>
    </Animated.View>
  );
}
