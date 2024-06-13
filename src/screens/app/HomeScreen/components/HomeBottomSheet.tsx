import {
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Text,
  TouchableOpacityBox,
} from '@components';

interface HomeBottomSheetProps {
  homeBottomSheetRef: React.RefObject<BottomSheetRefProps>;
  onCustomerProfile: () => void;
  onCreateReport: () => void;
  onCreateCustomer: () => void;
}

export function HomeBottomSheet({
  homeBottomSheetRef,
  onCustomerProfile,
  onCreateReport,
  onCreateCustomer,
}: HomeBottomSheetProps) {
  return (
    <BottomSheet ref={homeBottomSheetRef}>
      <Box rowGap="s16">
        <TouchableOpacityBox
          borderWidth={1}
          px="s16"
          py="s20"
          borderColor="neutral200"
          borderRadius="s16"
          onPress={onCustomerProfile}>
          <Text semiBold>Sobre o paciente</Text>
        </TouchableOpacityBox>

        <TouchableOpacityBox
          borderWidth={1}
          px="s16"
          py="s20"
          borderColor="neutral200"
          borderRadius="s16"
          onPress={onCreateReport}>
          <Text semiBold>Criar Relatório</Text>
        </TouchableOpacityBox>

        <TouchableOpacityBox
          borderWidth={1}
          px="s16"
          py="s20"
          borderColor="neutral200"
          borderRadius="s16"
          onPress={onCreateCustomer}>
          <Text semiBold>Editar Paciente</Text>
        </TouchableOpacityBox>

        <TouchableOpacityBox
          borderWidth={1}
          px="s16"
          py="s20"
          borderColor="redError"
          borderRadius="s16"
          onPress={() => {
            // onPressShowCustomerOptions();
            // onPressVisibleDeleteCustomer();
          }}>
          <Text color="redError" semiBold>
            Remover Paciente
          </Text>
        </TouchableOpacityBox>
      </Box>
    </BottomSheet>
  );
}
