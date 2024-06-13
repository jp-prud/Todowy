import { FlatList, ListRenderItemInfo } from 'react-native';

import { CustomerProps } from '@types';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Box, CustomerItem, Screen } from '@components';
import { AppScreenProps } from '@routes';

import { useSeeAllCustomerScreen } from './useSeeAllCustomerScreen';

export function SeeAllCustomerScreen({}: AppScreenProps<'SeeAllCustomerScreen'>) {
  const {customerList, isLoading} = useSeeAllCustomerScreen();

  function renderItem({item}: ListRenderItemInfo<CustomerProps>) {
    return (
      <Animated.View key={item.id} entering={FadeIn} exiting={FadeOut}>
        <Box>
          <CustomerItem key={item.id} customer={item} />
        </Box>
      </Animated.View>
    );
  }

  function createSeparator() {
    return <Box height={16} />;
  }

  return (
    <Screen title="Todos os pacientes" canGoBack isLoading={isLoading}>
      <FlatList
        data={customerList}
        keyExtractor={customer => customer.id}
        renderItem={renderItem}
        ItemSeparatorComponent={createSeparator}
      />
    </Screen>
  );
}
