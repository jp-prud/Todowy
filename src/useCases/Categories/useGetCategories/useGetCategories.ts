import { CategoriesService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useGetCategories(email: string) {
  const { getCategories } = CategoriesService();

  const { data, isLoading } = useQuery({
    queryKey: [`${QueryKeys.getCategories}-${email}`],
    queryFn: () => getCategories(email),
  });

  return {
    categories: data,
    categoriesIsLoading: isLoading,
  };
}
