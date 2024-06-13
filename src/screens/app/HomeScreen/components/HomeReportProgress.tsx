import { Box, Text } from '@components';

export function HomeReportProgress() {
  return (
    <Box px="s24" mt="s24">
      <Box
        px="s16"
        py="s12"
        borderRadius="s16"
        style={{
          backgroundColor: 'rgba(117,110,243, 0.15)',
        }}>
        <Box>
          <Text color="primary">Progresso</Text>
          <Text preset="headingMedium" color="primary" bold>
            25%
          </Text>
          <Text>Relatório diários concluídos</Text>
        </Box>
      </Box>
    </Box>
  );
}
