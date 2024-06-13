import { Image } from 'react-native';

import { AvatarListPresets } from '@utils';

import { ThemeColors } from '@theme';

import { Box } from '../Box/Box';

export interface AvatarProps {
  size?: number;
  avatar: AvatarListPresetUI;
}

export interface AvatarListPresetUI {
  id: string;
  icon: string;
  color: string | ThemeColors;
}

export function Avatar({ size = 32, avatar }: AvatarProps) {
  if (!avatar) {
    return <></>;
  }

  const { icon, color } = avatar;

  const imageSize = size / 2;

  return (
    <Box
      width={size}
      height={size}
      borderRadius="s16"
      backgroundColor={color}
      justifyContent="center"
      alignItems="center"
      testID="avatar-component">
      <Box borderRadius="s32" overflow="hidden">
        <Image
          source={icon || AvatarListPresets[icon].icon}
          style={{ height: imageSize, width: imageSize }}
        />
      </Box>
    </Box>
  );
}
