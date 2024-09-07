import React from 'react';
import { Image } from 'react-native';

import { AvatarListPresets } from '@utils';

import { ThemeColors } from '@theme';

import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Box } from '../Box/Box';

export interface AvatarProps {
  size?: number;
  avatar: AvatarListPresetUI;
  isLoading?: boolean;
}

export interface AvatarListPresetUI {
  icon: string;
  color: ThemeColors;
}

export function Avatar({ size = 32, avatar, isLoading = false }: AvatarProps) {
  if (!avatar && !isLoading) {
    return <></>;
  }

  if (isLoading) {
    return (
      <Box
        width={size}
        height={size}
        borderRadius="s16"
        backgroundColor="neutral200"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator size={size / 2} />
      </Box>
    );
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
