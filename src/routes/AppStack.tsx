import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CreateCustomerScreen,
  CreateReportScreen,
  CustomerProfileScreen,
  HomeScreen,
  SeeAllCustomerScreen,
  SeeAllReportScreen,
  SuccessScreen,
} from '../screens';

import {
  AppStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';
import { TabNavigationStack } from './TabNavigationStack';

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();

export function AppStackScreen() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="AppTabNavigator" component={TabNavigationStack} />

      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="CreateReportScreen" component={CreateReportScreen} />
      <Screen name="CreateCustomerScreen" component={CreateCustomerScreen} />
      <Screen name="CustomerProfileScreen" component={CustomerProfileScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
      <Screen name="SeeAllCustomerScreen" component={SeeAllCustomerScreen} />
      <Screen name="SeeAllReportScreen" component={SeeAllReportScreen} />
    </Navigator>
  );
}
