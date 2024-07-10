import { Box, Text } from "@components";
import React from "react";

export function IconPickerStep() {
  return (
    <Box alignSelf="center" mt="s32">
      <Box 
        width={120} 
        height={120} 
        borderRadius="s16"
        borderWidth={4} 
        borderStyle="dashed" 
        borderColor="neutral400" 
        justifyContent="center" 
        alignItems="center"
      >
        <Text preset="headingLarge">🦧</Text>
      </Box>

      {/* <EmojiPicker
        onEmojiSelected={handlePick}
        open={true}
        onClose={() => {}}
        enableSearchBar
        allowMultipleSelections
        categoryPosition="bottom"
      /> */}
    </Box>
  );
}