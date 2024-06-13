import { TaskService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { StorageKeys } from '@types';

export function useListTasks() {
  const { listTasks } = TaskService();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [StorageKeys.Tasks],
    queryFn: () => listTasks(),
  });

  return {
    tasks: data,
    numberOfCompletedTasks: 10,
    numberOfTotalTasks: 10,
    isLoading,
    isError,
    error,
    getLisTasks: refetch,
  };
}
