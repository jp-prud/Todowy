export interface ReportProps {
  id: string;
  accountId: string;
  customerId: string;
  createdAt: string;
  updatedAt: string;
  emotionalState: EmotionalStateEnum;
  mealsState: {
    breakfast: MealStateEnum;
    lunch: MealStateEnum;
    afternoonSnack: MealStateEnum;
    dinner: MealStateEnum;
  };
  evacuations: string;
  bathings: string;
  ferver: string;
  hydration: string;
  annotations?: string;
}

export type CreateReportData = Omit<
  ReportProps,
  'id' | 'accountId' | 'updatedAt' | 'createdAt'
>;

export type EmotionalStateEnum = 'happy' | 'sad' | 'neutral';


export type MealStateEnum = 'ate' | 'didntEat' | 'ateLittle' | 'refused';
