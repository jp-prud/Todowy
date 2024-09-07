import { useAuthContext, useToastService } from '@context';
import { useNavigation } from '@react-navigation/native';
import { useDeleteTaskById, useGetTaskById } from '@useCases';

export function useTaskDetailsScreen(taskId: string) {
  const { authCredentials } = useAuthContext();
  const { reset } = useNavigation();

  const { task, isError, isLoading } = useGetTaskById(
    taskId,
    authCredentials!.email,
  );
  const { showToast } = useToastService();

  const { deleteTaskById, deleteTaskIsLoading } = useDeleteTaskById({
    onSuccess() {
      showToast({
        message: 'Task deleted',
        type: 'success',
        position: 'bottom',
      });
    },
    onError() {
      showToast({
        message: 'Error deleting task',
        type: 'info',
        position: 'bottom',
      });
    },
  });

  function handlePressDeleteTask(deleteTaskId: string) {
    deleteTaskById({
      taskId: deleteTaskId,
      email: authCredentials!.email,
    });

    reset({
      index: 1,
      routes: [
        {
          name: 'HomeScreen',
        },
      ],
    });
  }

  return {
    task,
    isError,
    isLoading,
    handlePressDeleteTask,
    deleteTaskIsLoading,
  };
}
