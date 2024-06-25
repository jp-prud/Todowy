import { useEffect, useRef } from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';

import Animated, {
  AnimatedStyle,
  FadeIn,
  FadeOut,
  FlatListPropsWithLayout,
  LinearTransition,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface RubberBandingListProps<TData> extends FlatListPropsWithLayout<TData> {
  styles?: AnimatedStyle | AnimatedStyle[] | StyleProp<ViewStyle>;
  index?: number;
  translateX: SharedValue<number>;
}

interface AnimatedItemProps {
  index: number;
  startingEnteringValue: React.MutableRefObject<boolean>;
  render: React.ReactNode;
}

const { width: WIDTH_SCREEN } = Dimensions.get('window');

export function RubberBandingList<TData>({
  data,
  renderItem,
  ItemSeparatorComponent,
  ListEmptyComponent,
  styles,
  index = 0,
  translateX,
}: RubberBandingListProps<TData>) {
  const { width } = useWindowDimensions();
  const startingEnteringValue = useRef<boolean>(true);

  const rFlatList = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      'clamp',
    );

    return {
      opacity: withSpring(opacity),
    };
  });

  function animatedRenderItem({
    index: _index,
    ...rest
  }: ListRenderItemInfo<TData>) {
    // @ts-ignore
    const renderedItem = renderItem && renderItem({ _index, ...rest });

    return (
      <AnimatedItem
        index={index}
        startingEnteringValue={startingEnteringValue}
        render={renderedItem}
        key={index}
      />
    );
  }

  useEffect(() => {
    startingEnteringValue.current = false;
  }, []);

  return (
    <View style={flatListStyles.wrapperView}>
      <Animated.FlatList
        style={[styles, rFlatList]}
        data={data}
        keyExtractor={(_item, _index) => String(_index)}
        renderItem={animatedRenderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={flatListStyles.contentContainer}
        ListEmptyComponent={ListEmptyComponent}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
