import { CustomerService, useGetCustomersProps } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useGetCustomers({queryParams = {}}: useGetCustomersProps) {
  const {getCustomers} = CustomerService();

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: [QueryKeys.ListCustomers, queryParams],
    queryFn: () =>
      getCustomers({
        queryParams,
      }),
  });

  return {
    customersData: data,
    isLoading: isLoading,
    isError,
    getCustomers: refetch,
  };
}
