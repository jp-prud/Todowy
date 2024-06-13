import { CustomerService, useGetCustomerProps } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useGetCustomer({customerId}: useGetCustomerProps) {
  const {getCustomer} = CustomerService();

  const {data, isLoading, isPending, isError} = useQuery({
    queryKey: [QueryKeys.GetCustomer, customerId],
    queryFn: () =>
      getCustomer({
        customerId,
      }),
  });

  return {
    data,
    isLoading: isPending || isLoading,
    isError,
  };
}
