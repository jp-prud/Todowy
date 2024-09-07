import { useEffect, useRef } from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TaskProps } from '@types';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Box, RenderIfElse, Task, Text } from '@components';

import { useHomeScreen } from '../useHomeScreen';

import { Header } from './Header';

interface AnimatedItemProps {
  index: number;
  startingEnteringValue: React.MutableRefObject<boolean>;
  render: any;
}

const { width: WIDTH_SCREEN } = Dimensions.get('window');

export function SliderTaskList() {
  const { filteredTasks, getLisTasks, isLoading, searchTerm } = useHomeScreen();

  const { navigate } = useNavigation();
  const startingEnteringValue = useRef<boolean>(true);

  function renderItemSeparator() {
    return <Box height={20} />;
  }

  function renderTask({ index, item: task }: ListRenderItemInfo<TaskProps>) {
    return (
      <AnimatedItem
        index={index}
        startingEnteringValue={startingEnteringValue}
        render={
          <Task
            task={task}
            searchTerm={searchTerm}
            onPress={() =>
              navigate('TaskDetailsScreen', {
                taskId: task.id,
                taskAuthor: task.author,
              })
            }
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
        g="s4"
        mt="s48">
        <RenderIfElse
          condition={Boolean(searchTerm && filteredTasks.length === 0)}
          renderIf={
            <>
              <Text preset="paragraphLarge" semiBold>
                No task found
              </Text>
              <Text color="neutral500" textAlign="center">
                There is no task found with the search term "{searchTerm}".
              </Text>
            </>
          }
          renderElse={
            <>
              <Text preset="paragraphLarge" semiBold>
                No task for today :(
              </Text>
              <Text color="neutral500" textAlign="center">
                There is no task for today. {'\n'} Select the "+" button to
                create a new task.
              </Text>
            </>
          }
        />
      </Box>
    );
  }

  useEffect(() => {
    startingEnteringValue.current = false;
  }, []);

  return (
    <Animated.FlatList
      ListHeaderComponent={<Header />}
      stickyHeaderIndices={[0]}
      style={[flatListStyles.wrapperView]}
      data={filteredTasks}
      keyExtractor={_item => _item.id}
      renderItem={renderTask}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderItemSeparator}
      ListEmptyComponent={renderEmptyList}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={getLisTasks} />
      }
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
      exiting={FadeOut}>
      {props.render}
    </Animated.View>
  );
}

const flatListStyles = StyleSheet.create({
  wrapperView: {
    width: WIDTH_SCREEN - 48,
    flex: 1,
    zIndex: -1,
  },
  contentContainer: {
    flex: 1,
  },
});
