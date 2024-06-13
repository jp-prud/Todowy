import { CreateCustomerProps, CustomerProps } from '@types';

import { HttpClient } from '../utils/HttpClient';

interface PaginatedList<T> {
  customers: T[];
  numberOfCustomers: number;
}

export interface PaginatedListParams {
  skip?: string;
  take?: string;
}

export interface useGetCustomerProps {
  customerId: string;
}

export interface useGetCustomersProps {
  queryParams?: PaginatedListParams;
}

export function CustomerService() {
  async function getCustomer({
    customerId,
  }: useGetCustomerProps): Promise<CustomerProps> {
    const response = await HttpClient.get<CustomerProps>(
      `customer/${customerId}`,
    );

    console.log({customerId, response});

    return response.data;
  }

  async function getCustomers({queryParams}: useGetCustomersProps): Promise<{
    customers: CustomerProps[];
    numberOfCustomers: number;
  }> {
    const {skip, take} = queryParams || {};

    const mapQueryParams = [];

    if (skip) {
      mapQueryParams.push(`skip=${skip}`);
    }
    if (take) {
      mapQueryParams.push(`take=${take}`);
    }

    const queryString =
      mapQueryParams.length > 0 ? `?${mapQueryParams.join('&')}` : '';

    const endpoint = `customer${queryString}`;

    const response = await HttpClient.get<PaginatedList<CustomerProps>>(
      endpoint,
    );

    console.log(response.data);

    return response.data;
  }

  async function createCustomer(customer: CreateCustomerProps) {
    const response = await HttpClient.post<CustomerProps>('customer', customer);

    return response.data;
  }

  return {
    getCustomer,
    getCustomers,
    createCustomer,
  };
}
