import { TaskService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CompleteTaskDTO, MutationOptions, StorageKeys } from '@types';

export function useCompleteTaskUseCase(options?: MutationOptions<void>) {
  const { completeTask } = TaskService();

  const queryClient = useQueryClient();

  const { isSuccess, isPending, mutate } = useMutation<
    unknown,
    unknown,
    CompleteTaskDTO
  >({
    mutationKey: [StorageKeys.Tasks],
    mutationFn: taskProps => completeTask(taskProps.id, taskProps.author),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [StorageKeys.Tasks],
      });

      if (options?.onSuccess) {
        options.onSuccess();
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
    isSuccess,
    isPending,
    completeTask: mutate,
  };
}
