import { useNavigation } from '@react-navigation/native';
import { CustomerProps } from '@types';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import {
  Box,
  CustomerItem,
  RenderIf,
  RenderIfElse,
  Text,
  TitleBar,
} from '@components';

interface CustomerListContentProps {
  isError: boolean;
  customerList?: CustomerProps[];
  onShowCustomerOptions: () => void;
  onSelecedCustomer: (customer: CustomerProps) => void;
}

export function CustomerListContent({
  customerList,
  isError,
  onSelecedCustomer,
  onShowCustomerOptions,
}: CustomerListContentProps) {
  const navigation = useNavigation();

  function onPressNavigateToSeeAllCustomers() {
    navigation.navigate('SeeAllCustomerScreen');
  }

  function renderEmptyCustomerList() {
    return (
      <Box alignItems="center" gap="s4" mb="s24">
        <Text textAlign="center" preset="paragraphLarge" bold>
          Oops! 🙈
        </Text>
        <Text textAlign="center">
          Nenhum paciente foi encontrado. Adicione um agora mesmo.
        </Text>
      </Box>
    );
  }

  function renderErrorCustomerList() {
    return (
      <Box alignItems="center" gap="s4" mb="s24">
        <Text textAlign="center">
          Ocorreu um erro ao carregar a lista de pacientes. Tente novamente.
        </Text>
      </Box>
    );
  }

  function renderCustomerListContent() {
    return (
      <Box gap="s16">
        {customerList?.map(customer => (
          <Animated.View key={customer.id} entering={FadeIn} exiting={FadeOut}>
            <Box>
              <CustomerItem
                key={customer.id}
                customer={customer}
                onPress={() => {
                  onShowCustomerOptions();

                  onSelecedCustomer(customer);
                }}
              />
            </Box>
          </Animated.View>
        ))}
      </Box>
    );
  }

  return (
    <Box
      testID="home-empty-post-list"
      px="s24"
      mb="s8"
      borderRadius="s32"
      style={{marginTop: -20}}
      backgroundColor="white">
      <TitleBar
        mt="s24"
        title="Pacientes"
        mb="s24"
        linkText={
          customerList && customerList.length > 0 ? 'Ver todos' : undefined
        }
        onPress={onPressNavigateToSeeAllCustomers}
        hasIcon
      />

      <RenderIfElse
        condition={Boolean(customerList && customerList.length > 0)}
        renderIf={renderCustomerListContent()}
        renderElse={renderEmptyCustomerList()}
      />

      <RenderIf condition={isError} render={renderErrorCustomerList()} />
    </Box>
  );
}
