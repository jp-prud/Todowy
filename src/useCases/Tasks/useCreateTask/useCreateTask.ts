import { AnalyticsService, TaskService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateTaskDTO, MutationOptions, StorageKeys } from '@types';
import uuid from 'react-native-uuid';

export function useCreateTask(options?: MutationOptions<void>) {
  const { createTask } = TaskService();
  const { capture } = AnalyticsService();

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation<void, unknown, CreateTaskDTO>({
    mutationKey: [StorageKeys.Tasks],
    mutationFn: taskProps =>
      createTask({
        id: String(uuid.v4()),
        status: 'pending',
        created_at: new Date().toISOString(),
        ...taskProps,
      }),
    onSuccess(data, variables) {
      capture('createTask', { author: variables?.author });

      queryClient.invalidateQueries({
        queryKey: [`${StorageKeys.Tasks}-${variables.author}`],
      });

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError(e) {
      console.log(e);

      if (options?.onError) {
        options.onError(options.errorMessage || 'An error occurred');
      }
    },
  });

  return {
    createTask: mutateAsync,
    createTaskLoading: isPending,
  };
}
