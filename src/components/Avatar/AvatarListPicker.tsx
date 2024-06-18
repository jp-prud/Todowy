import { AvatarListPresets } from '@utils';

import {
  Avatar,
  AvatarListPresetUI,
  Box,
  BoxProps,
  TouchableOpacityBox,
} from '@components';

interface AvatarListPickerProps extends BoxProps {
  onChangeAvatar(avatar: AvatarListPresetUI): void;
}

export function AvatarListPicker({
  onChangeAvatar,
  ...boxStyles
}: AvatarListPickerProps) {
  return (
    <Box
      flexDirection="row"
      flexWrap="wrap"
      g="s16"
      justifyContent="center"
      {...boxStyles}>
      {AvatarListPresets.map(currentAvatar => (
        <TouchableOpacityBox
          key={currentAvatar.id}
          onPress={() => onChangeAvatar(currentAvatar)}>
          <Avatar avatar={currentAvatar} size={56} />
        </TouchableOpacityBox>
      ))}
    </Box>
  );
}
