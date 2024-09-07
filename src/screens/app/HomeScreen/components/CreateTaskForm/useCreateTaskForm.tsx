import { useState } from 'react';
import { Keyboard } from 'react-native';

import { useAuthContext } from '@context';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateTaskDTO, TaskFormSteps, TaskPriority } from '@types';
import { useCreateTask, useGetCategories } from '@useCases';
import { useForm } from 'react-hook-form';
import { DateType } from 'react-native-ui-datepicker';

import {
  CreateTaskForm,
  CreateTaskFormSchema,
  createTaskFormDefaultValues,
} from './createTaskFormSchema';

export function useCreateTaskForm() {
  const [currentStep, setCurrentStep] = useState<TaskFormSteps>('Form');

  const { createTask, createTaskLoading } = useCreateTask();
  const { authCredentials } = useAuthContext();
  const { categories, categoriesIsLoading } = useGetCategories(authCredentials!.email);

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
  } = useForm<CreateTaskFormSchema>({
    mode: 'onSubmit',
    defaultValues: createTaskFormDefaultValues,
    resolver: zodResolver(CreateTaskForm),
  });

  const onSubmit = handleSubmit(async data => {
    const createTaskPayload: CreateTaskDTO = {
      ...data,
      author: authCredentials!.email,
      tags: [],
    };

    await createTask(createTaskPayload);

    Keyboard.dismiss();

    reset();
  });

  function handlePressSelectCategory(categoryName: string) {
    const currentCategory = watch('category');

    if (currentCategory === categoryName) {
      setValue('category', '');
      return;
    }

    setValue('category', categoryName);
  }

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
    categoriesIsLoading,
    categories,
    handlePressSelectCategory,
  };
}
