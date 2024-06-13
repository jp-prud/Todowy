import { Box, Icon, Text } from '@components';

export function HomeHeader() {
  return (
    <Box backgroundColor="white">
      <Box
        pt="s24"
        px="s24"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        pb="s16"
        borderBottomWidth={1}
        borderColor="border">
        <Box gap="s4">
          <Text preset="headingMedium">Olá, Bêtel</Text>
          <Text color="subtext">Vamos cuidar dos seus pacientes juntos?</Text>
        </Box>

        <Box
          borderWidth={1}
          style={{borderColor: '#E9F1FF'}}
          borderRadius="s32"
          padding="s10">
          <Icon name="bell" onPress={() => console.log('oi')} />
        </Box>
      </Box>
    </Box>
  );
}
