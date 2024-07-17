import { ProfileService } from "@services";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@types";

export function useGetUserProfile() { 
  const { getProfile } = ProfileService()

  const { data, isLoading, isPending, isError } = useQuery({
    queryKey: [QueryKeys.userProfile],
    queryFn: getProfile,
    refetchInterval: 1000 * 60 * 20, // 20 minutes
  });

  return {
    isLoading: isPending || isLoading,
    isError,
    userProfile: data,
  };
}