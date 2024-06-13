import { ListRenderItemInfo } from 'react-native';

import { TaskProps } from '@types';
import { useSharedValue } from 'react-native-reanimated';

import { Box, Task, Text } from '@components';

// import { useHomeScreen } from '../useHomeScreen';

import { RubberBandingList } from './RubberBandingList';

interface SliderTaskListProps {
  searchTerm: string;
  data: TaskProps[];
  onPressItem?: (id: string) => void;
}

export function SliderTaskList({
  searchTerm,
  data,
  onPressItem,
}: SliderTaskListProps) {
  const translateX = useSharedValue(0);

  function renderItemSeparator() {
    return <Box height={20} />;
  }

  function renderTask({ item: task }: ListRenderItemInfo<TaskProps>) {
    return (
      <Task
        task={task}
        searchTerm={searchTerm}
        onPress={() => onPressItem && onPressItem(task.id)}
      />
    );
  }

  function renderEmptyList() {
    return (
      <Box
        flex={1}
        px="s16"
        py="s24"
        justifyContent="center"
        alignItems="center"
        flexDirection="column">
        <Text mb="s8" textAlign="center" preset="paragraphLarge" semiBold>
          No task for today
        </Text>
        <Text color="neutral500">There is no task for today. Create one ?</Text>
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
