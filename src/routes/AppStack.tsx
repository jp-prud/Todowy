import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CreateProjectScreen,
  EditTaskScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
  SuccessScreen,
  TaskDetailsScreen,
} from '../screens';

import {
  AppStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';
import { TabNavigationStack } from './TabNavigationStack';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="AppTabNavigator" component={TabNavigationStack} />

      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="CreateProjectScreen" component={CreateProjectScreen} />
      <Screen name="EditTaskScreen" component={EditTaskScreen} />
      <Screen name="SettingsScreen" component={SettingsScreen} />
      <Screen name="ProfileScreen" component={ProfileScreen} />
      <Screen name="TaskDetailsScreen" component={TaskDetailsScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
    </Navigator>
  );
}
