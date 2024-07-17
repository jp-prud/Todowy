import { ProjectService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useListProjects() {
  const { listProjects } = ProjectService();

  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QueryKeys.getProjects],
    queryFn: () => listProjects(),
  });

  return { projects, isLoading, isError };
}
