// import {useRef} from 'react';

import { useCallback, useRef, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { CustomerProps } from '@types';
import { useGetCustomers, useGetReportByDate } from '@useCases';

import { BottomSheetRefProps } from '@components';

// import {useScrollToTop} from '@react-navigation/native';

export function useHomeScreen() {
  const {customersData, isLoading, isError, getCustomers} = useGetCustomers({
    queryParams: {take: '2'},
  });
  const {
    reportList,
    isLoading: reportIsLoading,
    isError: reportIsError,
    error,
    getReportListByDate,
  } = useGetReportByDate({
    queryParams: {
      take: '2',
    },
  });

  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

  const homeBottomSheetRef = useRef<BottomSheetRefProps>(null);

  const navigation = useNavigation();

  const onPressShowCustomerOptions = useCallback(() => {
    const isActive = homeBottomSheetRef?.current?.isActive();
    if (isActive) {
      homeBottomSheetRef?.current?.scrollTo(0);
    } else {
      homeBottomSheetRef?.current?.scrollTo(-480);
    }
  }, []);

  const onPressVisibleDeleteCustomer = useCallback(() => {
    setVisibleDeleteModal(true);
  }, []);

  const onPressCloseDeleteCustomer = useCallback(() => {
    setVisibleDeleteModal(false);
  }, []);

  const [selectedCustomer, setSelecedCustomer] = useState<CustomerProps | null>(
    null,
  );

  function handlePressCreateReport() {
    navigation.navigate('CreateReportScreen', {
      customerId: selectedCustomer!.id,
    });

    onPressShowCustomerOptions();
  }

  function handlePressCustomerProfile() {
    navigation.navigate('CustomerProfileScreen', {
      customerId: selectedCustomer!.id,
    });

    onPressShowCustomerOptions();
  }

  function handlePressCreateCustomer() {
    navigation.navigate('CreateCustomerScreen');

    onPressShowCustomerOptions();
  }

  // const homeContentRef = useRef(null);
  // useScrollToTop(homeContentRef);
  return {
    customersData,
    reportList,
    isLoading,
    error,
    isError,
    homeBottomSheetRef,
    visibleDeleteModal,
    reportIsLoading,
    reportIsError,
    getReportListByDate,
    getCustomers,
    onPressShowCustomerOptions,
    onPressVisibleDeleteCustomer,
    onPressCloseDeleteCustomer,
    handlePressCreateReport,
    handlePressCustomerProfile,
    handlePressCreateCustomer,
    setSelecedCustomer,
  };
}
