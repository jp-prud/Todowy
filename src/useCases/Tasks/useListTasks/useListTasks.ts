import { TaskService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { StorageKeys } from '@types';

export function useListTasks(email: string) {
  const { listTasks } = TaskService();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [`${StorageKeys.Tasks}-${email}`],
    queryFn: () => listTasks(email),
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
