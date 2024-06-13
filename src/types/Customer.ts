export interface CustomerProps {
  id: string;
  name: string;
  room: string;
  phone: string;
  age: string;
  updatedAt: string;
}

export type CreateCustomerProps = Omit<CustomerProps, 'id' | 'updatedAt'>;
