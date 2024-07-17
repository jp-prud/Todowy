import { useFormContext } from 'react-hook-form';

import {
  Box,
  ProjectItem,
  StepperContent,
  StepperFooter,
  StepperHeader,
  StepperNextButton,
  StepperPreviousButton,
} from '@components';
import { ThemeColors } from '@theme';

import { CreateProjectFormSchemaTypes } from '../../createProjectFormSchema';
import { useCreateProjectScreen } from '../../useCreateProjectScreen';

export function FinishProjectStep() {
  const { watch } = useFormContext<CreateProjectFormSchemaTypes>();

  const { onFormSubmit } = useCreateProjectScreen();

  return (
    <>
      <StepperContent>
        <StepperHeader
          title="Finish up"
          subtitle="It’s time to finish up. You can always edit this later. Your project is ready to go!"
        />

        <Box alignSelf="center">
          <ProjectItem
            id="1"
            name={watch('name')}
            color={watch('color') as ThemeColors}
            width={200}
          />
        </Box>
      </StepperContent>

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton onPress={onFormSubmit} text="Finish" />
      </StepperFooter>
    </>
  );
}
