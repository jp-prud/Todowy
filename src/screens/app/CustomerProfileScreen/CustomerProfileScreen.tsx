import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

import { useCustomerProfileScreen } from './useCustomerProfileScreen';

export function CustomerProfileScreen({
  route: {
    params: {customerId},
  },
}: AppScreenProps<'CustomerProfileScreen'>) {
  const {data, isError, isLoading} = useCustomerProfileScreen({customerId});
  console.log(data);
  return (
    <Screen canGoBack title="Informações" isLoading={isLoading}>
      {!isError && data && <Text>{data.name}</Text>}
    </Screen>
  );
}
