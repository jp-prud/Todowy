import { Box, ProjectItem } from "@components";
import { ThemeColors } from "@theme";
import { useFormContext } from "react-hook-form";
import { CreateProjectFormSchemaTypes } from "../createProjectFormSchema";

export function FinishProjectStep() {
  const { 
    watch,
  } = useFormContext<CreateProjectFormSchemaTypes>()

  return (
    <Box alignSelf="center">
      <ProjectItem
        id="1"
        name={watch('name')}
        color={watch('color') as ThemeColors}
        icon={watch('icon')}
        width={200}
      />
    </Box>
  );
}