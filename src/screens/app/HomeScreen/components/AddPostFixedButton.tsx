import {ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Icon, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';
import {$shadowProps} from '@theme';

export function AddPostFixedButton() {
  const {navigate} = useNavigation();

  function handlePressNavigate() {
    navigate('CreateCustomerScreen');
  }

  return (
    <TouchableOpacityBox
      testID="add-post-fixed-button"
      onPress={handlePressNavigate}
      {...$touchableContainerStyles}
      style={[$shadowProps, $fixedContainerStyle]}>
      <Icon name="arrow" color="whiteTint1000" />
    </TouchableOpacityBox>
  );
}

const $touchableContainerStyles: TouchableOpacityBoxProps = {
  backgroundColor: 'primary',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  borderRadius: 's32',
  borderWidth: 2,
  borderColor: 'whiteTint1000',
};

const $fixedContainerStyle: ViewStyle = {
  position: 'absolute',
  right: 24,
  bottom: 24,
};
