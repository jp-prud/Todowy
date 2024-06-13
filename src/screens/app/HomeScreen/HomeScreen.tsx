import React from 'react';
import { ViewStyle } from 'react-native';

import { Box, Button, Modal, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

import {
  AddPostFixedButton,
  HomeBottomSheet,
  HomeErrorPostList,
  HomeHeader,
  ReportListContent,
} from './components';
import { CustomerListContent } from './components/CustomerListContent';
import { DataPickerSection } from './components/DataPickerSection';
import { HomeReportProgress } from './components/HomeReportProgress';
import { useHomeScreen } from './useHomeScreen';

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  const {
    customersData,
    isError,
    isLoading,
    homeBottomSheetRef,
    visibleDeleteModal,
    reportIsError,
    reportIsLoading,
    reportList,
    getCustomers,
    // getReportListByDate,
    onPressShowCustomerOptions,
    // onPressVisibleDeleteCustomer,
    onPressCloseDeleteCustomer,
    handlePressCreateCustomer,
    handlePressCreateReport,
    handlePressCustomerProfile,
    setSelecedCustomer,
  } = useHomeScreen();

  function renderHomeContent() {
    return (
      <Box>
        <HomeHeader />

        <DataPickerSection />

        <CustomerListContent
          customerList={customersData?.customers}
          isError={isError}
          onSelecedCustomer={customer => setSelecedCustomer(customer)}
          onShowCustomerOptions={onPressShowCustomerOptions}
        />

        <HomeReportProgress />

        <Box mt="s24">
          <ReportListContent isError={reportIsError} reportList={reportList} />
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Screen
        scrollable
        style={$homeScreenStyleFooter}
        footerContainerStyle={$homeScreenStyleContainer}
        isLoading={isLoading || reportIsLoading}
        FooterComponent={<AddPostFixedButton />}
        isError={isError || reportIsError}
        renderErrorComponent={
          <HomeErrorPostList refetch={() => getCustomers} />
        }>
        {renderHomeContent()}
      </Screen>

      <HomeBottomSheet
        homeBottomSheetRef={homeBottomSheetRef}
        onCreateCustomer={handlePressCreateCustomer}
        onCreateReport={handlePressCreateReport}
        onCustomerProfile={handlePressCustomerProfile}
      />

      <Modal
        isVisible={visibleDeleteModal}
        onClose={onPressCloseDeleteCustomer}>
        <Text>Deseja realmente excluir esse usuário?</Text>
        <Box mt="s32" gap="s16" alignItems="center">
          <Button text="Remover" />
          <Button text="Remover" />
        </Box>
      </Modal>
    </>
  );
}

const $homeScreenStyleContainer: ViewStyle = {
  paddingBottom: 0,
};

const $homeScreenStyleFooter: ViewStyle = {
  paddingHorizontal: 0,
  paddingVertical: 0,
};
