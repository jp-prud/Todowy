import { FlatList, ListRenderItemInfo } from 'react-native';

import { formatRelative } from '@utils';

import { Box, Screen, Text, TouchableOpacityBox } from '@components';
import { AppScreenProps } from '@routes';

import { useSeeAllReportScreen } from './useSeeAllReportScreen';

export function SeeAllReportScreen({}: AppScreenProps<'SeeAllReportScreen'>) {
  const {reportList, isLoading} = useSeeAllReportScreen();

  function renderItem({item}: ListRenderItemInfo<any>) {
    return (
      <TouchableOpacityBox
        key={item.id}
        borderWidth={1}
        borderColor="border"
        paddingHorizontal="s16"
        paddingVertical="s14"
        borderRadius="s16"
        rowGap="s8">
        <Text preset="paragraphLarge" bold>
          {item!.Customer!.name}
        </Text>
        <Text color="neutral600">
          Criado há {formatRelative(item!.createdAt)} atrás
        </Text>
      </TouchableOpacityBox>
    );
  }

  function createSeparator() {
    return <Box height={16} />;
  }

  return (
    <Screen title="Todos os relatórios" isLoading={isLoading} canGoBack>
      <FlatList
        data={reportList}
        keyExtractor={customer => customer.id}
        renderItem={renderItem}
        ItemSeparatorComponent={createSeparator}
      />
    </Screen>
  );
}
