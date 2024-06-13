import {useFormContext} from 'react-hook-form';

import {Box, FormTextInput, Text} from '@components';

import {CreateReportScreenFormValues} from '../CreateReportScreenFormSchema';

export function SecondStep() {
  const {control} = useFormContext<CreateReportScreenFormValues>();

  return (
    <>
      <Box mb="s20">
        <Text preset="paragraphLarge" bold>
          Saúde
        </Text>
      </Box>

      <Box gap="s16">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderColor="neutral300"
          borderWidth={1}
          borderRadius="s16"
          paddingHorizontal="s20"
          paddingVertical="s16"
          gap="s20">
          <Text semiBold>Banho</Text>

          <FormTextInput
            name="bathings"
            control={control}
            keyboardType="numeric"
            style={{height: 20, padding: 0}}
            textAlign="center"
          />
        </Box>

        <Box
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderColor="neutral300"
          borderWidth={1}
          borderRadius="s16"
          paddingHorizontal="s20"
          paddingVertical="s16"
          gap="s20">
          <Text semiBold>Febre</Text>

          <FormTextInput
            name="ferver"
            control={control}
            keyboardType="numeric"
            style={{height: 20, padding: 0}}
            textAlign="center"
          />
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderColor="neutral300"
          borderWidth={1}
          borderRadius="s16"
          paddingHorizontal="s20"
          paddingVertical="s16"
          gap="s20">
          <Text semiBold>Hidratação</Text>

          <FormTextInput
            name="hydration"
            control={control}
            keyboardType="numeric"
            style={{height: 20, padding: 0}}
            textAlign="center"
          />
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderColor="neutral300"
          borderWidth={1}
          borderRadius="s16"
          paddingHorizontal="s20"
          paddingVertical="s16">
          <Text semiBold>Evacuação</Text>

          <FormTextInput
            name="evacuations"
            control={control}
            keyboardType="numeric"
            style={{height: 20, padding: 0}}
            textAlign="center"
          />
        </Box>
      </Box>

      <Box mb="s20" mt="s36">
        <Text preset="paragraphLarge" bold mb="s16">
          Anotações
        </Text>

        <FormTextInput
          control={control}
          name="annotations"
          multiline
          numberOfLines={8}
          textAlignVertical="top"
        />
      </Box>
    </>
  );
}
