import {z} from 'zod';

export const EditCustomerScreenSchema = z.object({
  name: z.string({
    required_error: 'Nome é obrigatório',
  }),
  phone: z.string({
    required_error: 'Telefone é obrigatório',
  }),
  room: z.string({
    required_error: 'Quarto é obrigatório',
  }),
});

export const defaultEditCustomerScreenValues: EditCustomerScreenSchemaValues = {
  name: '',
  phone: '',
  room: '',
};

export type EditCustomerScreenSchemaValues = z.infer<
  typeof EditCustomerScreenSchema
>;
