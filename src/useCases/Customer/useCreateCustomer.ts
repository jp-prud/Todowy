import { CustomerService } from '@services';
import { useMutation } from '@tanstack/react-query';
import {
  CreateCustomerProps,
  CustomerProps,
  MutationKeys,
  MutationOptions,
} from '@types';

export function useCreateCustomer(options?: MutationOptions<CustomerProps>) {
  const {createCustomer} = CustomerService();

  const {isPending, isError, isSuccess, mutate} = useMutation<
    CustomerProps,
    unknown,
    CreateCustomerProps
  >({
    mutationKey: [MutationKeys.CreateCustomer],
    mutationFn: customer => createCustomer(customer),
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(
          options?.errorMessage || 'The customer could not be created',
        );
      }
    },
  });

  return {
    isLoading: isPending,
    isError,
    isSuccess,
    mutate,
  };
}
