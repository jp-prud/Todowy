import { useAuthContext } from '@context';
import { useMutation } from '@tanstack/react-query';
import { MutationKeys, MutationOptions, SaveProfileAvatarDTO } from '@types';

export function useSaveProfileImage(options?: MutationOptions<unknown>) {
  const { saveProfileImage } = useAuthContext();

  const { isPending, isError, isSuccess, mutateAsync } = useMutation<
    void,
    void,
    SaveProfileAvatarDTO
  >({
    mutationKey: [MutationKeys.saveProfileImage],
    mutationFn: avatarProps => saveProfileImage(avatarProps),
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Error saving profile image');
      }
    },
  });

  return {
    isLoading: isPending,
    isError,
    isSuccess,
    saveProfileImage: mutateAsync,
  };
}
