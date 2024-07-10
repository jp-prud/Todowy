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

export function useCreateTaskForm() {
  const { createTask, createTaskLoading } = useCreateTask();

  const [currentStep, setCurrentStep] = useState<TaskFormSteps>('Form');

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
      assigned_to: 'me',
      category: 'personal',
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
