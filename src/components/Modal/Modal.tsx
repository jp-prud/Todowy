import { Modal as RNModal } from 'react-native';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';

interface ModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  onClose(): void;
}

export function Modal({ isVisible, onClose, children }: ModalProps) {
  return (
    <RNModal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}>
      <Box
        flex={1}
        paddingVertical="s24"
        paddingHorizontal="s24"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        justifyContent="center"
        alignItems="center">
        <Box
          backgroundColor="white"
          paddingVertical="s24"
          paddingHorizontal="s24"
          borderRadius="s16">
          <Box alignSelf="flex-end">
            <Icon name="close" onPress={onClose} />
          </Box>

          <Box flex={1}>{children}</Box>
        </Box>
      </Box>
    </RNModal>
  );
}
