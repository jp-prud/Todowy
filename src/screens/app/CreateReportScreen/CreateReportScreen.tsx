import { Button, Screen } from '@components';
import { AppScreenProps } from '@routes';

import { useCreateReportScreen } from './useCreateReportScreen';

export function CreateReportScreen({
  route: {
    params: {customerId},
  },
}: AppScreenProps<'CreateReportScreen'>) {
  const {
    currentStep,
    isPending,
    renderFormProvider,
    handlePressNextStep,
    onSubmit,
  } = useCreateReportScreen({customerId});

  return (
    <Screen
      canGoBack
      scrollable
      title="Relatório"
      FooterComponent={
        <Button
          onPress={currentStep === 'firstStep' ? handlePressNextStep : onSubmit}
          text={currentStep === 'firstStep' ? 'Avançar' : 'Finalizar'}
          loading={isPending}
        />
      }
      footerContainerStyle={{paddingHorizontal: 16}}>
      {renderFormProvider()}
    </Screen>
  );
}
