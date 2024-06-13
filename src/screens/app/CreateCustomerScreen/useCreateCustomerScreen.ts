import { useToastService } from '@context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useCreateCustomer } from '@useCases';
import { useForm } from 'react-hook-form';

import {
  CreateCustomerScreenSchema,
  CreateCustomerScreenSchemaValues,
  defaultCreateCustomerScreenValues,
} from './createCustomerScreenSchema';

export function useCreateCustomerScreen() {
  const navigation = useNavigation();

  const {showToast} = useToastService();

  const {isLoading, mutate} = useCreateCustomer({
    onSuccess: () => {
      navigation.navigate('HomeScreen');
      showToast({
        message: 'Paciente criado com sucesso!',
        type: 'success',
        duration: 5000,
      });
    },
    onError: message => {
      showToast({message, type: 'info'});
    },
  });

  const {control, handleSubmit} = useForm<CreateCustomerScreenSchemaValues>({
    defaultValues: defaultCreateCustomerScreenValues,
    resolver: zodResolver(CreateCustomerScreenSchema),
  });

  const onSubmit = handleSubmit((data: CreateCustomerScreenSchemaValues) => {
    mutate(data);
  });

  return {
    control,
    onSubmit,
    isLoading,
  };
}
