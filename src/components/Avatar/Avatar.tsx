import React from 'react';
import { Image } from 'react-native';

import { ThemeColors } from '@theme';

import { AvatarListPresets } from '@utils';
import { Box } from '../Box/Box';

export interface AvatarProps {
  size?: number;
  avatar: AvatarListPresetUI;
}

export interface AvatarListPresetUI {
  icon: string;
  color: ThemeColors;
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
      alignItems="center">
      <Box>
        {icon !== '' && (
          <Image
            source={AvatarListPresets[Number(icon)]?.icon}
            style={{ height: imageSize, width: imageSize }}
          />
        )}
      </Box>
    </Box>
  );
}
