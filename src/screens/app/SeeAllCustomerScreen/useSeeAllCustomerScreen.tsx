import { useGetCustomers } from '@useCases';

export function useSeeAllCustomerScreen() {
  const {customersData, isError, isLoading} = useGetCustomers({
    queryParams: {take: '10'},
  });

  return {
    customerList: customersData?.customers,
    isError,
    isLoading,
  };
}
