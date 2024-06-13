import z from 'zod';

// FIX: ERROR MESSAGE IS NOT SHOWING USING REQUIRED_ERROR STRING METHOD

export const mealsStateEnum = [
  'ate',
  'didntEat',
  'ateLittle',
  'refused',
] as const;

export const CreateReportScreenFormSchema = z.object({
  emotionalState: z.enum(['happy', 'sad', 'neutral'], {
    required_error: 'Estado emocional é obrigatório',
  }),
  mealsState: z.object({
    breakfast: z.enum(mealsStateEnum, {
      required_error: 'Café da manhã é obrigatório',
    }),
    lunch: z.enum(mealsStateEnum, {
      required_error: 'Almoço é obrigatório',
    }),
    afternoonSnack: z.enum(mealsStateEnum, {
      required_error: 'Lanche da tarde é obrigatório',
    }),
    dinner: z.enum(mealsStateEnum, {
      required_error: 'Jantar é obrigatório',
    }),
  }),
  evacuations: z.string().nonempty('Evacuações é obrigatório'),
  bathings: z.string().nonempty('Banho é obrigatório'),
  ferver: z.string().nonempty('Febre é obrigatório'),
  hydration: z.string().nonempty('Hidratação é obrigatório'),
  annotations: z.string().optional(),
});

export const defaultCreateReportScreenFormValues: CreateReportScreenFormValues =
  {
    emotionalState: 'neutral',
    mealsState: {
      breakfast: 'ate',
      lunch: 'ate',
      afternoonSnack: 'ate',
      dinner: 'ate',
    },
    evacuations: '1',
    bathings: '1',
    ferver: '',
    hydration: '1',
    annotations: '',
  };

export type CreateReportScreenFormValues = z.infer<
  typeof CreateReportScreenFormSchema
>;
