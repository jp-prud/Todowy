import { TaskProps } from '@types';
import { useGetTaskById } from '@useCases';

export function useEditTaskScreen(taskId: TaskProps['id']) {
  const { task, isLoading, isError } = useGetTaskById();

  return {
    task,
    isLoading,
    isError,
  };
}
