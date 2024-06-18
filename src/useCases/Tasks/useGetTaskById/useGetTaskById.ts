import { TaskService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { StorageKeys } from '@types';

export function useGetTaskById(taskId: string) {
  const { getTaskById } = TaskService();

  const {
    data: task,
    isPending,
    isError,
  } = useQuery({
    queryKey: [StorageKeys.Tasks, { taskId }],
    queryFn: () => getTaskById(taskId),
  });

  return {
    task: task,
    isLoading: isPending,
    isError,
  };
}
