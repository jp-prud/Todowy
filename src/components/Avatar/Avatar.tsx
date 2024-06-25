import { Image, ImageSourcePropType } from 'react-native';

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
  color: ThemeColors;
}

export function Avatar({ size = 32, avatar }: AvatarProps) {
  if (!avatar) {
    return <></>;
  }

  const { id, icon, color } = avatar;

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
          source={(icon || AvatarListPresets[Number(id)].icon) as ImageSourcePropType}
          style={{ height: imageSize, width: imageSize }}
        />
      </Box>
    </Box>
  );
}
