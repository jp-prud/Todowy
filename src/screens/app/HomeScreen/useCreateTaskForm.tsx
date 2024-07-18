import { useState } from 'react';
import { Keyboard } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { TaskFormSteps, TaskPriority } from '@types';
import { useCreateTask } from '@useCases';
import { useForm } from 'react-hook-form';
import { DateType } from 'react-native-ui-datepicker';

import {
  CreateTaskForm,
  createTaskFormDefaultValues,
} from './createTaskFormSchema';
import { useAuthContext } from '@context';

export function useCreateTaskForm() {
  const [currentStep, setCurrentStep] = useState<TaskFormSteps>('Form');
  
  const { createTask, createTaskLoading } = useCreateTask();
  const { authCredentials } = useAuthContext()

  function handlePressToggleStep() {
    setCurrentStep(currentStep === 'Form' ? 'DatePicker' : 'Form');
  }

  const {
    control: createTaskControl,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isValid: isValidCreateTaskForm },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: createTaskFormDefaultValues,
    resolver: zodResolver(CreateTaskForm),
  });

  const onSubmit = handleSubmit(async data => {
    await createTask({
      ...data,
      category: 'personal',
      author: authCredentials!.email,
      tags: [],
    });

    Keyboard.dismiss();

    reset();
  });

  function handlePressSelectPriority(priority: {
    label: string;
    value: TaskPriority;
  }) {
    setValue('priority', priority.value, { shouldValidate: true });
  }

  function handlePressChangeDate(date: DateType) {
    setValue('due_date', date!.toLocaleString(), { shouldValidate: true });
  }

  return {
    currentStep,
    createTaskLoading,
    createTaskControl,
    onSubmit,
    isValidCreateTaskForm,
    handlePressSelectPriority,
    handlePressToggleStep,
    watch,
    handlePressChangeDate,
  };
}
