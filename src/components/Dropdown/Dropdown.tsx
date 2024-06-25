import React from 'react';
import { StyleSheet } from 'react-native';

import { Dropdown as ExternalDropdown } from 'react-native-element-dropdown';
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

import { useAppTheme } from '@hooks';

import { Box } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';

type DropdownPropsCustom<T> = DropdownProps<T> & {
  label?: string;
};

type CustomRenderItemProps<T> = T & {
  label: string;
};

export function Dropdown<T>(props: DropdownPropsCustom<T>) {
  const { label } = props;

  const { colors } = useAppTheme();

  function renderItem(item: CustomRenderItemProps<T>) {
    return (
      <Box p="s16" backgroundColor="white">
        <Text>{item.label}</Text>
      </Box>
    );
  }

  return (
    <Box g="s4" flex={1}>
      {label && (
        <Text semiBold color="neutral500">
          {label}
        </Text>
      )}

      <ExternalDropdown
        style={[
          styles.dropdown,
          {
            borderColor: colors.neutral300,
            fontFamily: $fontFamily.regular,
            ...$fontSizes.paragraphMedium,
          },
        ]}
        renderItem={(item: T) => renderItem(item as CustomRenderItemProps<T>)}
        placeholderStyle={{
          color: colors.neutral700,
        }}
        selectedTextStyle={{
          color: colors.neutral1000,
        }}
        inputSearchStyle={styles.inputSearchStyle}
        {...props}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 6,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
