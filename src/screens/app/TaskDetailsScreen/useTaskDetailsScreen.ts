import { useToastService } from '@context';
import { useNavigation } from '@react-navigation/native';
import { useDeleteTaskById, useGetTaskById } from '@useCases';

export function useTaskDetailsScreen(taskId: string) {
  const { task, isError, isLoading } = useGetTaskById(taskId);
  const { showToast } = useToastService();

  const { reset } = useNavigation();

  const { deleteTaskById } = useDeleteTaskById({
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
    deleteTaskById(deleteTaskId);

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
  };
}
