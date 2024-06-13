import React, { useMemo, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerProps } from '@types';
import { useCreateReport } from '@useCases';
import { FormProvider, useForm } from 'react-hook-form';

import { useResetNavigationSuccess } from '@hooks';

import { FirstStep } from './components/FirstStep';
import { SecondStep } from './components/SecondStep';
import {
  CreateReportScreenFormSchema,
  CreateReportScreenFormValues,
  defaultCreateReportScreenFormValues,
} from './CreateReportScreenFormSchema';

type StepsOptions = 'firstStep' | 'secondStep';

interface useCreateReportScreenProps {
  customerId: CustomerProps['id'];
}

export function useCreateReportScreen({
  customerId,
}: useCreateReportScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {createReport, isPending} = useCreateReport({
    errorMessage: 'Erro ao criar relatório',
    onSuccess: createdReport => {
      reset({
        report: createdReport,
      });
    },
    onError: () => console.log('Erro ao criar relatório'),
  });

  const [currentStep, setCurrentStep] = useState<StepsOptions>('firstStep');

  const methods = useForm<CreateReportScreenFormValues>({
    defaultValues: {
      ...defaultCreateReportScreenFormValues,
    },
    mode: 'onSubmit',
    resolver: zodResolver(CreateReportScreenFormSchema),
  });

  const steps = useMemo(
    () => ({
      firstStep: () => <FirstStep />,
      secondStep: () => <SecondStep />,
    }),
    [],
  );

  const CurrentStep = useMemo(() => steps[currentStep], [steps, currentStep]);

  function handlePressNextStep() {
    setCurrentStep('secondStep');
  }

  function handlePressBackStep() {
    setCurrentStep('firstStep');
  }

  function renderFormProvider() {
    return (
      <FormProvider {...methods}>
        <CurrentStep />
      </FormProvider>
    );
  }

  const onSubmit = methods.handleSubmit(
    (reportFormData: CreateReportScreenFormValues) => {
      console.log(reportFormData);

      return createReport({
        customerId,
        ...reportFormData,
      });
    },
  );

  return {
    currentStep,
    isPending,
    CurrentStep,
    handlePressNextStep,
    handlePressBackStep,
    renderFormProvider,
    onSubmit,
  };
}
