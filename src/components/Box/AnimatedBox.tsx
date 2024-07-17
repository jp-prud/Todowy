import Animated, { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";

interface AnimatedBoxProps {
  children: React.ReactNode;
  style?: any;
}

export function AnimatedBox({ children, ...props }: AnimatedBoxProps) {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition.springify()}
      {...props}	
    >
      {children}
    </Animated.View>
  );
}