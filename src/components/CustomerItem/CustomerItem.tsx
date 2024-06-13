import { CustomerProps } from '@types';

import { TouchableOpacityBox } from '../Box/Box';
import { Text } from '../Text/Text';

export interface CustomerItemProps {
  customer: CustomerProps;
  onPress?: () => void;
}

export function CustomerItem({customer, onPress}: CustomerItemProps) {
  // const {navigate} = useNavigation();
  const {name, room} = customer;
  // function handleClickNavigationPostDetails() {
  //   navigate('PostDetailsScreen', {
  //     postId,
  //   });
  // }

  return (
    <TouchableOpacityBox
      onPress={onPress}
      borderWidth={1}
      borderColor="border"
      paddingHorizontal="s16"
      paddingVertical="s14"
      borderRadius="s16"
      rowGap="s8">
      <Text color="neutral600">Quarto {room}</Text>
      <Text preset="paragraphLarge" bold>
        {name}
      </Text>
    </TouchableOpacityBox>
  );
}
