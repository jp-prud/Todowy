import { useGetCustomer } from '@useCases';

export function useCustomerProfileScreen({customerId}: {customerId: string}) {
  const {data, isError, isLoading} = useGetCustomer({customerId});

  return {data, isError, isLoading};
}
