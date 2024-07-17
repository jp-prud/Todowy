import { FormProvider } from 'react-hook-form';

import { Box, Screen, Stepper } from '@components';

import { ColorPickerStep, FinishProjectStep, FormNameStep } from './components';
import { useCreateProjectScreen } from './useCreateProjectScreen';

export function CreateProjectScreen() {
  const { formMethods } = useCreateProjectScreen();

  return (
    <Screen canGoBack>
      <FormProvider {...formMethods}>
        <Box justifyContent="center" alignItems="center" flex={1}>
          <Stepper
            steps={[
              { content: <FormNameStep /> },
              { content: <ColorPickerStep /> },
              { content: <FinishProjectStep /> },
            ]}
          />
        </Box>
      </FormProvider>
    </Screen>
  );
}
