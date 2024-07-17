import { useListProjects } from '@useCases';

export function useProjectsScreen() {
  const { projects, isLoading } = useListProjects();

  return {
    projects,
    isLoading,
  };
}
