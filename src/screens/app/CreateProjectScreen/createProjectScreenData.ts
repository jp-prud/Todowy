import { ColorPickerStep, FinishProjectStep, FormNameStep, IconPickerStep } from "./components";

export type CreateProjectStepProps = {
  title: string;
  subtitle: string;
  index: number;
  total: number;
  isLast: boolean;
  render: () => any;
}

type CreateProjectStepPropsWithoutMeta = Omit<CreateProjectStepProps, 'index' | 'total' | 'isLast'>;

const firstStep: CreateProjectStepPropsWithoutMeta = {
  title: 'Name your project',
  subtitle: 'Choose a nickname for your project.',
  render: FormNameStep
}

const secondStep: CreateProjectStepPropsWithoutMeta = {
  title: 'Choose a color',
  subtitle: 'Great. Now choose a color for your project and you can always edit this later.',
  render: ColorPickerStep
}

const thirdStep: CreateProjectStepPropsWithoutMeta = {
  title: 'Choose an icon',
  subtitle: 'Great. Now choose an icon for your project and you can always edit this later.',
  render: IconPickerStep
}

const fourthStep: CreateProjectStepPropsWithoutMeta = {
  title: 'Finish up',
  subtitle: 'It’s time to finish up. You can always edit this later. Your project is ready to go!',
  render: FinishProjectStep
}

export const steps: CreateProjectStepProps[] = [firstStep, secondStep, thirdStep, fourthStep].map((step, index, arr) => ({
  ...step,
  index,
  total: arr.length,
  isLast: index + 1 === arr.length,
}));