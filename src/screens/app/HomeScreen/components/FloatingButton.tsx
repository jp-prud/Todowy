import React, { useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { BottomSheet, Box, Icon, Text, TouchableOpacityBox } from '@components';
import { useBottomSheet } from '@hooks';
import { CreateCategoryForm } from './CreateCategoryForm/CreateCategoryForm';
import { CreateTaskForm } from './CreateTaskForm/CreateTaskForm';


type Status = 'closed' | 'open';

type AddTaskStatus = {
  status: Status;
};

export function FloatingButton() {
  const { width } = useWindowDimensions();
  const [addTaskStatus, setAddTaskStatus] = useState<AddTaskStatus>({
    status: 'closed',
  });

  const { bottomSheetRef: taskBottomSheetRef } = useBottomSheet();

  const { bottomSheetRef: categoryBottomSheetRef } = useBottomSheet();

  const currentSharedStatus = useDerivedValue<AddTaskStatus>(
    () => ({
      status: 'closed',
      options: 'createTask',
    }),
    [addTaskStatus],
  );

  const defaultBoxSize = useSharedValue({
    width: 52,
  });

  const openContainerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      defaultBoxSize.value.width,
      [52, width - 32, width],
      // [52, 160, 280],
      [46, 240, 440], // category height
    );

    const borderRadius = interpolate(
      defaultBoxSize.value.width,
      [52, width - 32, width],
      [30, 32, 16],
      'clamp',
    );

    const position = interpolate(
      defaultBoxSize.value.width,
      [52, width - 32, width],
      [16, 16, 0],
    );

    return {
      height: withTiming(height, {
        duration: 200,
      }),
      borderRadius: withTiming(borderRadius, {
        duration: 200,
      }),
      width: withTiming(defaultBoxSize.value.width, {
        duration: 200,
      }),
      bottom: withTiming(position, {
        duration: 200,
      }),
      right: withTiming(position, {
        duration: 200,
      }),
    };
  });

  const openButtonRenderStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(currentSharedStatus.value.status === 'open' ? 0 : 24),
      opacity: withTiming(currentSharedStatus.value.status === 'open' ? 0 : 1),
    };
  });

  function onOpen() {
    'worklet';

    setAddTaskStatus({
      status: 'open',
    });
    defaultBoxSize.value = {
      width: width - 32,
    };
  }

  function onClose() {
    'worklet';

    setAddTaskStatus({
      status: 'closed',
    });

    defaultBoxSize.value = {
      width: 52,
    };
  }

  function onPressCreateTask() {
    taskBottomSheetRef.current?.present();

    onClose();
  }

  function onPressCreateCategory() {
    categoryBottomSheetRef.current?.present();

    onClose();
  }

  function renderOptions() {
    return (
      <Animated.View>
        <TouchableOpacityBox
          p="s8"
          onPress={() => onPressCreateTask()}
          flexDirection="row"
          gap="s16"
          width="100%">
          <Box
            width={42}
            height={42}
            borderRadius="s32"
            backgroundColor="blue"
            justifyContent="center"
            alignItems="center">
            <Icon name="plus" color="white" />
          </Box>
          <Box flex={1}>
            <Text preset="paragraphLarge" semiBold color="black700">
              Create task
            </Text>
            <Text preset="paragraphSmall" color="black500">
              Create a new task to organize your day more efficiently.
            </Text>
          </Box>
        </TouchableOpacityBox>

        <TouchableOpacityBox
          p="s8"
          onPress={() => onPressCreateCategory()}
          flexDirection="row"
          gap="s16"
          width="100%">
          <Box
            width={42}
            height={42}
            borderRadius="s32"
            backgroundColor="green"
            justifyContent="center"
            alignItems="center">
            <Icon name="plus" color="white" />
          </Box>
          <Box flex={1}>
            <Text preset="paragraphLarge" semiBold color="black700">
              Create category
            </Text>
            <Text preset="paragraphSmall" color="black500">
              Create a new task to organize your day more efficiently.
            </Text>
          </Box>
        </TouchableOpacityBox>
      </Animated.View>
    );
  }

  return (
    <>
      {addTaskStatus.status === 'open' && (
        <Animated.View style={styles.overlay} onTouchStart={onClose} />
      )}

      <Animated.View style={[styles.container, openContainerStyle]}>
        {addTaskStatus.status !== 'closed' && (
          <Animated.View style={[styles.list]}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mb="s8">
              <Text semiBold preset="paragraphLarge">
                {addTaskStatus.status === 'open' ? 'Options' : 'Creating'}
              </Text>

              <Icon name="close" onPress={onClose} color="black400" />
            </Box>

            {addTaskStatus.status === 'open' && renderOptions()}
          </Animated.View>
        )}

        {addTaskStatus.status === 'closed' && (
          <Animated.View
            style={[openButtonRenderStyle, { transform: [{ scale: 1.2 }] }]}>
            <Icon name="plus" color="black1000" onPress={onOpen} />
          </Animated.View>
        )}
      </Animated.View>

      <BottomSheet enableOverDrag={false} ref={taskBottomSheetRef}>
        <CreateTaskForm onClose={onClose} />
      </BottomSheet>

      <BottomSheet scrollable ref={categoryBottomSheetRef}>
        <CreateCategoryForm onClose={onClose} />
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 2,
    overflow: 'hidden',
    elevation: 3,
    right: 16,
    bottom: 16,
    minHeight: 52,
    minWidth: 52,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  list: {
    width: '100%',
    flex: 1,
    height: '100%',
    gap: 8,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  containerModal: {
    zIndex: 999999,
  },
  contentContainer: {
    zIndex: 9,
  },
});
