import { Box, HORIZONTAL_PADDING, Text } from "@components";
import { useWindowDimensions } from "react-native";
import Animated, { FadeIn, FadeInRight, FadeOut, FadeOutRight, LinearTransition } from "react-native-reanimated";
import { CreateProjectStepProps } from "../createProjectScreenData";

export interface CreateProjectFormStepScreen {
  pageItem: CreateProjectStepProps;
}

export function CreateProjectFormStepScreen({
  pageItem
}: CreateProjectFormStepScreen) {
  const { title, subtitle, render } = pageItem

  const { width } = useWindowDimensions()

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition.springify()}
      style={{flex: 1}}
    >
      <Box
        width={width - HORIZONTAL_PADDING * 2}
        justifyContent="center"
        alignContent="center"
        flex={1}
      >
        <Box g="s24" justifyContent="center">
          <Animated.View
            entering={FadeInRight}
            exiting={FadeOutRight}
            layout={LinearTransition.springify()}
          >
            <Box g="s12" alignItems="center" mb="s32">
              <Text preset="headingMedium" textAlign="center">{title}</Text>
              
              <Text preset="paragraphLarge" color="neutral600" textAlign="center">
                {subtitle}
              </Text>
            </Box>

            {render()}
          </Animated.View>
        </Box>
      </Box>
    </Animated.View>
  );
}