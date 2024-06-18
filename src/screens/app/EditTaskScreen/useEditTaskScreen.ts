import { useState } from 'react';

import { useToastService } from '@context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { TaskFormSteps, TaskPriority, TaskProps } from '@types';
import { useEditTask, useGetTaskById } from '@useCases';
import { useForm } from 'react-hook-form';
import { DateType } from 'react-native-ui-datepicker';

import { EditTaskForm, EditTaskFormSchema } from './editTaskFormSchema';

export function useEditTaskScreen(taskId: TaskProps['id']) {
  const { navigate } = useNavigation();

  const { showToast } = useToastService();

  const { editTask, isLoading: editTaskLoading } = useEditTask({
    onSuccess: () => {
      showToast({
        message: 'Imagem de perfil salva com sucesso',
        type: 'success',
        position: 'bottom',
      });

      navigate('HomeScreen');
    },
    onError: () => {
      showToast({
        message: 'Erro ao salvar imagem de perfil',
        type: 'info',
        position: 'bottom',
      });
    },
  });

  const [currentStep, setCurrentStep] = useState<TaskFormSteps>('Form');

  function handleToggleStep() {
    setCurrentStep(currentStep === 'Form' ? 'DatePicker' : 'Form');
  }

  const { task, isLoading, isError } = useGetTaskById(taskId);

  const {
    handleSubmit,
    control: editTaskControl,
    watch,
    setValue,
  } = useForm<EditTaskFormSchema>({
    defaultValues: task,
    resolver: zodResolver(EditTaskForm),
    mode: 'onChange',
  });

  const onPressSubmit = handleSubmit(async data => {
    await editTask({
      taskId,
      updateTaskDTO: data,
    });
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
    handleToggleStep,
    task,
    isLoading,
    isError,
    watch,
    editTaskControl,
    handlePressSelectPriority,
    handlePressChangeDate,
    editTaskLoading,
    onPressSubmit,
  };
}
