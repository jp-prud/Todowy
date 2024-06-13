export type StepOption = 'Starter' | 'ProfileForm';

export type StepProps = {
  Component: React.ElementType;
  onPressNextStep: (isLast?: boolean) => void;
  onPressBackStep: () => void;
  index: number;
  total: number;
  isLast: boolean;
};

export type StepPropsWithoutMetaData = Omit<
  StepProps,
  'index' | 'total' | 'isLast' | 'onPressNextStep' | 'onPressBackStep'
>;
