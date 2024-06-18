import { ListRenderItemInfo } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TaskProps } from '@types';
import { useSharedValue } from 'react-native-reanimated';

import { Box, Task, Text } from '@components';

import { RubberBandingList } from './RubberBandingList';

interface SliderTaskListProps {
  searchTerm: string;
  data: TaskProps[];
}

export function SliderTaskList({ searchTerm, data }: SliderTaskListProps) {
  const { navigate } = useNavigation();

  const translateX = useSharedValue(0);

  function renderItemSeparator() {
    return <Box height={20} />;
  }

  function renderTask({ item: task }: ListRenderItemInfo<TaskProps>) {
    return (
      <Task
        task={task}
        searchTerm={searchTerm}
        onPress={() => navigate('TaskDetailsScreen', { taskId: task.id })}
      />
    );
  }

  function renderEmptyList() {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        g="s4">
        <Text preset="paragraphLarge" semiBold>
          No task for today :(
        </Text>
        <Text color="neutral500" textAlign="center">
          There is no task for today. Create one ?
        </Text>
      </Box>
    );
  }

  return (
    <RubberBandingList
      data={data}
      renderItem={renderTask}
      ItemSeparatorComponent={renderItemSeparator}
      ListEmptyComponent={renderEmptyList}
      translateX={translateX}
    />
  );
}
