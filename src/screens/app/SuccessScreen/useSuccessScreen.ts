import { Share } from 'react-native';

import { useToastService } from '@context';
import { ReportProps } from '@types';
import { generateShareReportMessage } from '@utils';

export function useSuccessScreen() {
  const {showToast} = useToastService();

  async function handlePressShareReport(report: ReportProps) {
    try {
      await Share.share({
        message: generateShareReportMessage(report),
      });
    } catch (error) {
      console.log('Error sharing report', error);

      showToast({
        duration: 5000,
        message: 'Erro ao compartilhar relatório. Tente novamente.',
      });
    }
  }

  return {
    handlePressShareReport,
  };
}
