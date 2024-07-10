import { Dimensions, ListRenderItemInfo, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TaskProps } from '@types';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';

import { Box, Task, Text } from '@components';
import { useRef, useEffect } from 'react';

interface SliderTaskListProps {
  searchTerm: string;
  data: TaskProps[];
}

interface AnimatedItemProps {
  index: number;
  startingEnteringValue: React.MutableRefObject<boolean>;
  render: React.ReactNode;
}

const { width: WIDTH_SCREEN } = Dimensions.get('window');

export function SliderTaskList({ searchTerm, data }: SliderTaskListProps) {
  const { navigate } = useNavigation();
  const startingEnteringValue = useRef<boolean>(true);

  function renderItemSeparator() {
    return <Box height={20} />;
  }

  function renderTask({
    index,
    item: task
  }: ListRenderItemInfo<TaskProps>) {
    return (
      <AnimatedItem
        index={index}
        startingEnteringValue={startingEnteringValue}
        render={
          <Task
            task={task}
            searchTerm={searchTerm}
            onPress={() => navigate('TaskDetailsScreen', { taskId: task.id })}
          />
        }
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

  useEffect(() => {
    startingEnteringValue.current = false;
  }, []);

  return (
    <Animated.FlatList
      style={[flatListStyles.wrapperView]}
      data={data}
      keyExtractor={(_item) => _item.id}
      renderItem={renderTask}
      ItemSeparatorComponent={renderItemSeparator}
      ListEmptyComponent={renderEmptyList}
    />
  );
}

function AnimatedItem(props: AnimatedItemProps) {
  return (
    <Animated.View
      entering={
        props.startingEnteringValue.current
          ? FadeIn.delay(100 * props.index)
          : FadeIn
      }
      exiting={FadeOut}
      layout={LinearTransition.delay(100)}>
      {props.render}
    </Animated.View>
  );
}


const flatListStyles = StyleSheet.create({
  wrapperView: {
    width: WIDTH_SCREEN - 48,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});