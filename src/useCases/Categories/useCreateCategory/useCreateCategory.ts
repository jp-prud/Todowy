import { CategoriesService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  CreateCategoryDTO,
  MutationKeys,
  MutationOptions,
  QueryKeys,
} from '@types';
import uuid from 'react-native-uuid';

export function useCreateCategory(options?: MutationOptions<any>) {
  const { createCategory } = CategoriesService();

  const queryCliente = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: [MutationKeys.createCategory],
    mutationFn: ({
      category,
      email,
    }: {
      category: Omit<CreateCategoryDTO, 'id'>;
      email: string;
    }) =>
      createCategory(
        {
          ...category,
          id: String(uuid.v4()),
        },
        email,
      ),
    onError: error => {
      console.log('Error creating category', error);

      if (options?.onError) {
        options.onError(error);
      }
    },
    onSuccess: (data, variables) => {
      queryCliente.invalidateQueries({
        queryKey: [`${QueryKeys.getCategories}-${variables.email}`],
      });

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
  });

  return {
    createCategory: mutateAsync,
    createCategoryIsLoading: isPending,
  };
}
