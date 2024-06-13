import { Box, Icon, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

import { useTaskDetailsScreen } from './useTaskDetailsScreen';

export function TaskDetailsScreen({
  route,
  navigation,
}: AppScreenProps<'TaskDetailsScreen'>) {
  const { taskId } = route.params;

  const { task, isLoading, handlePressDeleteTask } =
    useTaskDetailsScreen(taskId);

  console.log(task);

  return (
    <Screen title="Task Details" canGoBack isLoading={isLoading}>
      <Box>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="s32">
          <Box flex={1}>
            <Text preset="headingMedium" numberOfLines={2}>
              {task!.title}
            </Text>
          </Box>

          <Box gap="s12" alignItems="center" flexDirection="row">
            <Icon
              name="pencil"
              onPress={() =>
                navigation.navigate('EditTaskScreen', {
                  taskId: task!.id,
                })
              }
            />
            <Icon
              name="trash"
              onPress={() => handlePressDeleteTask(task!.id)}
            />
          </Box>
        </Box>

        <Box mt="s16" gap="s12">
          {task!.description && (
            <Text color="neutral600">{task!.description}</Text>
          )}
          <Text>{task!.category}</Text>
          <Text>{task!.priority}</Text>
        </Box>
      </Box>
    </Screen>
  );
}
