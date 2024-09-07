import React, { forwardRef } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { useBottomSheet } from '@hooks';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

interface BottomSheetHeaderProps {
  title: string;
  description?: string;
  onClose?: () => void;
}

type Props = {
  children: React.ReactNode;
  scrollable?: boolean;
};

type BottomSheetProps = BottomSheetModalProps & Props;

export const BOTTOM_SHEET_INSET_POSITION = 80;

export const BottomSheet = forwardRef<
  BottomSheetModalMethods,
  BottomSheetProps
>((props, ref) => {
  const { bottomSheetProps } = useBottomSheet();

  const Container = props.scrollable ? BottomSheetScrollView : BottomSheetView;

  return (
    <BottomSheetModal
      ref={ref}
      {...props}
      {...bottomSheetProps}
      footerComponent={props.footerComponent}>
      <Container>
        <Box g="s24" paddingHorizontal="s24" paddingVertical="s24">
          {props!.children}
        </Box>
      </Container>
    </BottomSheetModal>
  );
});

export function BottomSheetHeader({
  title,
  description,
}: BottomSheetHeaderProps) {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap="s16">
      <Box g="s8" flex={1}>
        <Text preset="headingMedium" bold>
          {title}
        </Text>
        {description && <Text color="neutral500">{description}</Text>}
      </Box>

      <Icon name="close" color="black400" />
    </Box>
  );
}

export function BottomSheetFooter({ children }: any) {
  return (
    <Box flexDirection="row" alignItems="center" gap="s16">
      {children}
    </Box>
  );
}
