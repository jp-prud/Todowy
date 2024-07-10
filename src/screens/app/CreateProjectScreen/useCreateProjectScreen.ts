import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { CreateProjectFormSchema, CreateProjectFormSchemaTypes, DEFAULT_CREATE_PROJECT_FORM_VALUES } from "./createProjectFormSchema";
import { steps } from "./createProjectScreenData";

export function useCreateProjectScreen() {
  const formMethods = useForm<CreateProjectFormSchemaTypes>({
    defaultValues: DEFAULT_CREATE_PROJECT_FORM_VALUES,
    resolver: zodResolver(CreateProjectFormSchema),
  })

  const [currentStep, setCurrentStep] = useState(0);
  
  const handlePressNextStep = useCallback(
    async (isLast?: boolean) => {
      if (isLast) {
        onFormSubmit()
      }

      setCurrentStep(currentStep + 1);
    },
    [currentStep],
  );

  const handlePressBackStep = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const CurrentStepRenderComponent = useMemo(
    () => steps[currentStep],
    [steps, currentStep],
  );

  const isLastPage = useMemo(() => currentStep === steps.length - 1, [currentStep]);

  const onFormSubmit = formMethods.handleSubmit((data) => { 
    console.log(data)
  })

  return {
    formMethods,
    currentStep,
    handlePressNextStep,
    handlePressBackStep,
    CurrentStepRenderComponent,
    isLastPage,
  };
}