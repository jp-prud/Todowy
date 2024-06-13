import { Keyboard } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { TaskPriority } from '@types';
import { useCreateTask } from '@useCases';
import { useForm } from 'react-hook-form';

import {
  CreateTaskForm,
  createTaskFormDefaultValues,
} from './createTaskFormSchema';

export function useCreateTaskForm() {
  const { createTask, createTaskLoading } = useCreateTask();

  const {
    control: createTaskControl,
    handleSubmit,
    reset,
    setValue,
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
      due_date: '2022-12-31',
      tags: ['personal', 'work', 'others', 'important'],
    });

    Keyboard.dismiss();

    reset();
  });

  function handlePressSelectPriority(priority: {
    label: string;
    value: TaskPriority;
  }) {
    console.log({ priority });

    setValue('priority', priority.value, { shouldValidate: true });
  }

  return {
    createTaskLoading,
    createTaskControl,
    onSubmit,
    isValidCreateTaskForm,
    handlePressSelectPriority,
  };
}
