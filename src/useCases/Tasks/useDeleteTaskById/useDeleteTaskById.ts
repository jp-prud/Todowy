import { TaskService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutationOptions, StorageKeys } from '@types';

export function useDeleteTaskById({
  errorMessage,
  onError,
  onSuccess,
}: MutationOptions<void>) {
  const { deleteTaskById: deleteTaskByIdService } = TaskService();
  const queryClient = useQueryClient();

  const { mutate: deleteTaskById, isPending } = useMutation<
    void,
    unknown,
    {
      taskId: string;
      email: string;
    }
  >({
    mutationKey: [StorageKeys.Tasks],
    mutationFn: task => deleteTaskByIdService(task.taskId, task.email),
    onError() {
      if (onError) {
        onError(errorMessage || 'An error occurred while deleting the task');
      }
    },
    onSuccess(data, variables) {
      queryClient.invalidateQueries({
        queryKey: [`${StorageKeys.Tasks}-${variables.email}`],
      });

      if (onSuccess) {
        onSuccess();
      }
    },
  });

  return {
    deleteTaskById,
    deleteTaskIsLoading: isPending,
  };
}
