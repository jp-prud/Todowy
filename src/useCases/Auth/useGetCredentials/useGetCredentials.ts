import { AuthService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useGetCredentials() {
  const { load } = AuthService();

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.getCredentials],
    queryFn: load,
  });

  return {
    authCredentials: data,
    isLoading,
  };
}
