import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { ReportProps } from '@types';

export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  RecoveryPasswordScreen: undefined;
};

export type AppStackParamList = {
  AppTabNavigator: undefined;
  HomeScreen: undefined;
  CreateCustomerScreen: undefined;
  SeeAllCustomerScreen: undefined;
  SeeAllReportScreen: undefined;
  CreateReportScreen: {
    customerId: string;
  };
  EditCustomerScreen: {
    customerId: string;
  };
  CustomerProfileScreen: {
    customerId: string;
  };

  SuccessScreen: {
    report: ReportProps;
  };
};

export type AppTabNavigatorParamList = {
  HomeScreen: undefined;
};

export type AppScreenProps<RouteScreenName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteScreenName>;

export type AuthScreenProps<RouteScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteScreenName>;

export type RootStackParamList = AuthStackParamList & AppStackParamList;

export type AppTabScreenProps<
  RouteName extends keyof AppTabNavigatorParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabNavigatorParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const NAVIGATOR_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  fullScreenGestureEnabled: true,
  navigationBarHidden: true,
};
