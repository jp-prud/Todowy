import { TaskService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  MutationKeys,
  MutationOptions,
  StorageKeys,
  UpdateTaskDTO,
} from '@types';

export function useEditTask(options: MutationOptions<void>) {
  const { updateTask } = TaskService();

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation<
    void,
    unknown,
    { taskId: string; updateTaskDTO: UpdateTaskDTO }
  >({
    mutationKey: [MutationKeys.editTask],
    mutationFn: ({ taskId, updateTaskDTO }) =>
      updateTask(taskId, updateTaskDTO),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [StorageKeys.Tasks],
      });

      if (options.onSuccess) {
        options.onSuccess();
      }
    },
    onError: () => {
      if (options.onError) {
        options.onError(options?.errorMessage || 'Error updating task');
      }
    },
  });

  return {
    isLoading: isPending,
    editTask: mutateAsync,
  };
}
