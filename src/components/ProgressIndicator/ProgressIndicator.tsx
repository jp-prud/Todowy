import React from 'react';

import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Box, BoxProps } from '../Box/Box';

type ProgressIndicatorProps = BoxProps & {
  total: number;
  currentIndex: number;
};

export function ProgressIndicator({
  total,
  currentIndex,
  ...boxProps
}: ProgressIndicatorProps) {
  return (
    <Box flexDirection="row" alignItems="center" {...boxProps} g="s8"> 
      {Array.from({ length: total }).map((_, index) => (
        <Animated.View
          key={index}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Box
            width={index === currentIndex ? 40 : 20}
            height={6}
            borderRadius='s4'
            backgroundColor={index === currentIndex ? 'primary' : 'neutral200'}
          />
        </Animated.View>
      ))}
    </Box>
  );
}