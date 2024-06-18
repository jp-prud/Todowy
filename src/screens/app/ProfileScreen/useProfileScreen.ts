import { useAuthContext, useToastService } from '@context';
import { SaveProfileAvatarDTO } from '@types';
import { useSaveProfileImage } from '@useCases';

export function useProfileScreen() {
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

  const { authCredentials, isLoading } = useAuthContext();

  async function handleSelectAvatar(avatar: SaveProfileAvatarDTO) {
    await saveProfileImage(avatar);
  }

  return {
    isLoading,
    authCredentials,
    handleSelectAvatar,
  };
}
