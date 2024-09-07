import { FilterOptions, TaskService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { StorageKeys } from '@types';

export function useListTasks(email: string, filterOptions?: FilterOptions) {
  const { listTasks } = TaskService();

  const { data, isLoading, isPending, isFetching, isError, error, refetch } =
    useQuery({
      queryKey: [`${StorageKeys.Tasks}-${email}`, filterOptions],
      queryFn: () => listTasks(email, filterOptions),
      placeholderData: placeholderData => placeholderData,
    });

  return {
    tasks: data,
    isLoading: isLoading || isPending || isFetching,
    isError,
    error,
    getLisTasks: refetch,
  };
}
