import { useFormContext } from 'react-hook-form';

import {
  AvatarListPicker,
  AvatarListPresetUI,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  StepperPreviousButton
} from '@components';
import { OnboardingFormSchemaTypes } from '../../onboardingProfileFormSchema';

export function AvatarPickerStep() {
  const { setValue } = useFormContext<OnboardingFormSchemaTypes>();

  function handlePressChangeAvatar(_avatar: AvatarListPresetUI) {
    setValue('avatar', _avatar, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  return (
    <>
      <StepperHeader
        title="Choose Your Icon"
        subtitle="Let's get you started"
      />

      <AvatarListPicker mt="s24" onChangeAvatar={handlePressChangeAvatar} />

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton text="It's look cute" />
      </StepperFooter>
    </>
  );
}
