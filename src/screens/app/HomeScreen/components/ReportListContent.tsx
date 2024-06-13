import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { CustomerProps, ReportProps } from '@types';
import { formatRelative } from '@utils';

import {
  Box,
  RenderIf,
  RenderIfElse,
  Text,
  TitleBar,
  TouchableOpacityBox,
} from '@components';

interface ReportListContentProps {
  isError: boolean;
  reportList:
    | (Pick<ReportProps, 'id' | 'createdAt'> & {
        Customer: Pick<CustomerProps, 'id' | 'name'>;
      })[]
    | undefined;
}

export function ReportListContent({
  isError,
  reportList,
}: ReportListContentProps) {
  const navigation = useNavigation();

  function onPressNavigateToSeeAllReports() {
    navigation.navigate('SeeAllReportScreen');
  }

  function renderErrorReportList() {
    return <Text>erro</Text>;
  }

  function renderEmptyReportList() {
    return (
      <Box alignItems="center" gap="s4" mb="s24" px="s24">
        <Text textAlign="center" preset="paragraphLarge" bold>
          Oops! 🙈
        </Text>
        <Text textAlign="center">Nenhum relatório foi realizado hoje.</Text>
      </Box>
    );
  }

  function renderReportContent() {
    return (
      <Box px="s14" gap="s16">
        {reportList?.map(report => (
          <TouchableOpacityBox
            key={report.id}
            borderWidth={1}
            borderColor="border"
            paddingHorizontal="s16"
            paddingVertical="s14"
            borderRadius="s16"
            rowGap="s8">
            <Text preset="paragraphLarge" bold>
              {report.Customer.name}
            </Text>
            <Text color="neutral600">
              Criado há {formatRelative(report.createdAt)} atrás
            </Text>
          </TouchableOpacityBox>
        ))}
      </Box>
    );
  }

  return (
    <>
      <TitleBar
        title="Relatórios recentes"
        px="s24"
        linkText={reportList && reportList.length > 0 ? 'Ver todos' : undefined}
        onPress={onPressNavigateToSeeAllReports}
        hasIcon
        mb="s16"
      />

      <Box px="s14" gap="s16">
        <RenderIfElse
          condition={Boolean(reportList && reportList.length > 0)}
          renderIf={renderReportContent()}
          renderElse={renderEmptyReportList()}
        />

        <RenderIf
          condition={Boolean(isError)}
          render={renderErrorReportList()}
        />
      </Box>
    </>
  );
}
