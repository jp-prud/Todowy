import { z } from 'zod';

export const CreateCustomerScreenSchema = z.object({
  name: z.string({
    required_error: 'Nome é obrigatório',
  }),
  phone: z.string({
    required_error: 'Telefone é obrigatório',
  }),
  room: z.string({
    required_error: 'Quarto é obrigatório',
  }),
  age: z.string({
    required_error: 'Idade é obrigatória',
  }),
});

export const defaultCreateCustomerScreenValues: CreateCustomerScreenSchemaValues =
  {
    name: '',
    phone: '',
    room: '',
    age: '',
  };

export type CreateCustomerScreenSchemaValues = z.infer<
  typeof CreateCustomerScreenSchema
>;
