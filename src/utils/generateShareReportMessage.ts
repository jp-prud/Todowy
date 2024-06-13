import {ReportProps} from '@types';

export function generateShareReportMessage(report: ReportProps) {
  const {
    emotionalState,
    mealsState,
    evacuations,
    bathings,
    ferver,
    hydration,
    annotations,
  } = report;

  const mealsStateText = {
    ate: 'comeu',
    didntEat: 'não comeu',
    ateLittle: 'comeu pouco',
    refused: 'recusou',
  };

  const emotonalStateText = {
    happy: 'feliz',
    sad: 'triste',
    neutral: 'normal',
  };

  console.log(report);

  return `
  Olá, segue o relatório do paciente:
    - Estado emocional: ${emotonalStateText[emotionalState]}
    - Café da manhã: ${mealsStateText[mealsState.breakfast]}
    - Almoço: ${mealsStateText[mealsState.dinner]}
    - Lanche da tarde: ${mealsStateText[mealsState.afternoonSnack]}
    - Jantar: ${mealsStateText[mealsState.lunch]}
    - Evacuações: ${evacuations}
    - Banhos: ${bathings}
    - Febre: ${ferver}
    - Hidratação: ${hydration}
    - Anotações: ${annotations}
  `;
}
