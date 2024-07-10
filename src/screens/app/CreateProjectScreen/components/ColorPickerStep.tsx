import { Box, TouchableOpacityBox } from "@components";
import { ThemeColors } from "@theme";
import { useFormContext } from "react-hook-form";
import { CreateProjectFormSchemaTypes } from "../createProjectFormSchema";
 
const COLOR_PICKER_OPTIONS: ThemeColors[] = [
  'darkRed',
  'purple',
  'lightPurple',
  'primary',
  'blue',
  'lightBlue',
  'pink',
  'amber400',
  'iconGreen',
  'green',
  'yellow',
  "amber200",
  "lightRed",
  'text',
  'subtext'
]

export function ColorPickerStep() {
  const { 
    watch,
    setValue
  } = useFormContext<CreateProjectFormSchemaTypes>()

  function handleOnPressColor(color: ThemeColors) { 
    setValue('color', color)
  }

  return (
    <Box flexDirection="row" flexWrap="wrap" g="s16" mt="s32" justifyContent="center" alignItems="center">
      {COLOR_PICKER_OPTIONS.map((color) => (
        <TouchableOpacityBox
          key={color}
          onPress={() => handleOnPressColor(color)}
          width={48}
          height={48}
          borderRadius="s24"
          backgroundColor={color}
          justifyContent="center"
          alignItems="center"
        >
          {watch('color') === color && (
            <Box width={32} height={32} borderWidth={4} borderColor="white" borderRadius="s16" />
          )} 
        </TouchableOpacityBox>
      ))}
    </Box>
  );
}