import { Box, Button, ProgressIndicator, Screen } from "@components";
import { FormProvider } from "react-hook-form";
import Animated, { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";
import { CreateProjectFormStepScreen } from "./components";
import { steps } from "./createProjectScreenData";
import { useCreateProjectScreen } from "./useCreateProjectScreen";

export function CreateProjectScreen() {
  const {
    formMethods,
    currentStep,
    CurrentStepRenderComponent,
    handlePressBackStep,
    handlePressNextStep,
    isLastPage
  } = useCreateProjectScreen();

  return (
    <Screen
      canGoBack
    >
      <FormProvider {...formMethods}>
        <Box justifyContent="center" alignItems="center" flex={1}>
          <Box position="absolute" zIndex={1} top={24}>
            <ProgressIndicator
              currentIndex={currentStep}
              total={steps.length}
            />
          </Box>
        
          <CreateProjectFormStepScreen
            pageItem={CurrentStepRenderComponent}
          />
        </Box>

        <Box flexDirection="row" g="s16">
          {currentStep >= 1 && (
            <Animated.View
              style={{flex: 1}}
              entering={FadeIn}
              exiting={FadeOut}
              layout={LinearTransition.springify(600)}>
                <Button text="Previous" preset="outline" onPress={handlePressBackStep} />
            </Animated.View>
          )}

          <Animated.View
            style={{flex: 1}}
            entering={FadeIn}
            exiting={FadeOut}
            layout={LinearTransition.springify(600)}>
            <Button text={isLastPage ? 'Finish' : "Continue"} onPress={() => handlePressNextStep(isLastPage)} />
          </Animated.View>
        </Box>
      </FormProvider>
    </Screen>
  );
}