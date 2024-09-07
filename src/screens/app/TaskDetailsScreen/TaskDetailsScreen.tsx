import {
  BottomSheet,
  BottomSheetFooter,
  BottomSheetHeader,
  Box,
  Button,
  CategoryFlag,
  Icon,
  PriorityFlag,
  RenderIfElse,
  Screen,
  Text,
} from '@components';
import { useBottomSheet } from '@hooks';
import { AppScreenProps } from '@routes';

import { useTaskDetailsScreen } from './useTaskDetailsScreen';

export function TaskDetailsScreen({
  route,
  navigation,
}: AppScreenProps<'TaskDetailsScreen'>) {
  const { taskId } = route.params;

  const { task, isLoading, handlePressDeleteTask, deleteTaskIsLoading } =
    useTaskDetailsScreen(taskId);

  const { bottomSheetRef, onClose, onOpen } = useBottomSheet();

  function onHandlePressDeleteTask() {
    onOpen();
  }

  function renderTaskDetails() {
    if (isLoading) {
      return <></>;
    }

    const {
      id,
      title,
      created_at,
      due_date,
      description,
      category,
      priority,
      author,
    } = task!;

    return (
      <Box>
        <Box flexDirection="row" alignSelf="flex-start" mb="s16" g="s16">
          <CategoryFlag label={category} />
          <PriorityFlag priority={priority} />
        </Box>

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="s32">
          <Box flex={1}>
            <Text preset="headingMedium" numberOfLines={2}>
              {title}
            </Text>
          </Box>

          <Box gap="s12" alignItems="center" flexDirection="row">
            <Icon
              name="pencil"
              onPress={() =>
                navigation.navigate('EditTaskScreen', {
                  taskId: id,
                  taskAuthor: author,
                })
              }
            />
            <Icon name="trash" onPress={onHandlePressDeleteTask} />
          </Box>
        </Box>

        <Box flexDirection="row" mt="s16" justifyContent="space-between">
          <Box>
            <Text color="neutral600" preset="paragraphSmall" semiBold>
              Start Date
            </Text>
            <Text preset="paragraphSmall" semiBold>
              {new Date(created_at).toDateString()}
            </Text>
          </Box>
          <Box>
            <Text
              color="neutral600"
              preset="paragraphSmall"
              semiBold
              textAlign="right">
              Due Date
            </Text>
            <Text preset="paragraphSmall" semiBold>
              {new Date(due_date).toDateString()}
            </Text>
          </Box>
        </Box>

        <Box mt="s24" g="s12" justifyContent="center" alignItems="stretch">
          <RenderIfElse
            condition={Boolean(description)}
            renderIf={
              <Text color="neutral600" textAlign="justify">
                {description}
              </Text>
            }
            renderElse={
              <Text color="neutral600" textAlign="center">
                No description provided for this task
              </Text>
            }
          />
        </Box>
      </Box>
    );
  }

  return (
    <Screen title="Task Details" canGoBack isLoading={isLoading}>
      {renderTaskDetails()}

      <BottomSheet ref={bottomSheetRef}>
        <BottomSheetHeader
          title="Delete Task"
          description="Are you sure you want to delete this task? You can't undo this action."
        />

        <BottomSheetFooter>
          <Button
            text="Cancel"
            disabled={deleteTaskIsLoading}
            loading={deleteTaskIsLoading}
            onPress={onClose}
            preset="outline"
            flex={1}
          />
          <Button
            text="Delete"
            disabled={deleteTaskIsLoading}
            loading={deleteTaskIsLoading}
            onPress={() => handlePressDeleteTask(taskId)}
            flex={1}
          />
        </BottomSheetFooter>
      </BottomSheet>
    </Screen>
  );
}
