import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  EditCustomerScreenSchema,
  EditCustomerScreenSchemaValues,
  defaultEditCustomerScreenValues,
} from './EditCustomerScreenSchema';

export function useEditCustomerScreen() {
  const {control, handleSubmit} = useForm<EditCustomerScreenSchemaValues>({
    defaultValues: defaultEditCustomerScreenValues,
    resolver: zodResolver(EditCustomerScreenSchema),
  });

  const onSubmit = handleSubmit((data: EditCustomerScreenSchemaValues) => {
    console.log({data});
  });

  return {
    control,
    onSubmit,
  };
}
