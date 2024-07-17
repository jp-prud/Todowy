import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  CreateProjectFormSchema,
  CreateProjectFormSchemaTypes,
  DEFAULT_CREATE_PROJECT_FORM_VALUES,
} from './createProjectFormSchema';

export function useCreateProjectScreen() {
  const formMethods = useForm<CreateProjectFormSchemaTypes>({
    defaultValues: DEFAULT_CREATE_PROJECT_FORM_VALUES,
    resolver: zodResolver(CreateProjectFormSchema),
    mode: 'onChange',
  });
  const onInvalid = errors => {
    console.log(
      'nome',
      formMethods.getValues('name'),
      formMethods.getValues('color'),
    );

    console.error(errors);
  };

  const onFormSubmit = formMethods.handleSubmit(data => {
    console.log('teste');
    console.log(data);
  }, onInvalid);

  return {
    onFormSubmit,
    formMethods,
  };
}
