import { CategoriesService } from "@services";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@types";

export function useGetCategoryByName(categoryName: string, email: string) {
  const { getCategoryByName } = CategoriesService()

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.getCategoryByName, categoryName],
    queryFn: () => getCategoryByName(categoryName, email)
  })

  return {
    category: data,
    getCategoryByNameIsLoading: isLoading,
    getCategoryByNameIsError: isError
  }
}
