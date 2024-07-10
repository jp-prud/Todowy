import { Box, FormTextInput } from "@components";
import { useFormContext } from "react-hook-form";
import { CreateProjectFormSchemaTypes } from "../createProjectFormSchema";

export function FormNameStep() {
  const { 
    control,
  } = useFormContext<CreateProjectFormSchemaTypes>()

  return (
    <Box>
      <FormTextInput
        control={control}
        name="name"
        label="Project Name"
        placeholder="Enter project name"
      />
    </Box>
  );
}