import { useGetUserProfile, useSignOut } from '@useCases';

export function useSettingsScreen() {
  const { userProfile, isLoading } = useGetUserProfile();

  const { signOut } = useSignOut();

  return {
    signOut,
    userProfile,
    isLoading,
  };
}
