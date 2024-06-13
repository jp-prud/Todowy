import React from 'react';
import { StyleSheet } from 'react-native';

import { Dropdown as ExternalDropdown } from 'react-native-element-dropdown';
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

import { useAppTheme } from '@hooks';

import { Box } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';

// interface DropdownItem {
//   label: string;
//   value: string;
// }

type DropdownPropsCustom = Partial<DropdownProps<any>> & {
  label?: string;
};

export function Dropdown(props: DropdownPropsCustom) {
  const { label } = props;

  const { colors } = useAppTheme();

  function renderItem(item: { label: string }) {
    return (
      <Box p="s16" backgroundColor="white">
        <Text>{item.label}</Text>
      </Box>
    );
  }

  return (
    <Box g="s4">
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
        renderItem={renderItem}
        placeholderStyle={{
          color: colors.neutral700,
        }}
        selectedTextStyle={{
          color: colors.neutral1000,
        }}
        inputSearchStyle={styles.inputSearchStyle}
        labelField="label"
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
