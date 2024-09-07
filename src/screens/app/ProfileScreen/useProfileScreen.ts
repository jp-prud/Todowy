import { useToastService } from '@context';
import { SaveProfileAvatarDTO } from '@types';
import { useGetUserProfile, useSaveProfileImage, useSignOut } from '@useCases';

export function useProfileScreen() {
  const { userProfile, isLoading } = useGetUserProfile();
  const { signOut } = useSignOut();
  const { showToast } = useToastService();

  const { saveProfileImage } = useSaveProfileImage({
    errorMessage: 'Erro ao salvar imagem de perfil',
    onError: () => {
      showToast({
        message: 'Erro ao salvar imagem de perfil',
        type: 'info',
        position: 'bottom',
      });
    },
    onSuccess: () => {
      showToast({
        message: 'Imagem de perfil salva com sucesso',
        type: 'success',
        position: 'bottom',
      });
    },
  });

  async function handleSelectAvatar(avatar: SaveProfileAvatarDTO) {
    await saveProfileImage(avatar);
  }

  return {
    isLoading,
    userProfile,
    handleSelectAvatar,
    signOut,
  };
}
