import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStackScreen } from './AppStack';

// import { ActivityIndicator, Box, Text } from '@components';

export function Router() {
  // const {authCredentials, isLoading} = useAuthContext();

  // console.log({isLoading, authCredentials});

  // if (isLoading) {
  //   return (
  //     <Box
  //       flex={1}
  //       justifyContent="center"
  //       alignItems="center"
  //       backgroundColor="background">
  //       <ActivityIndicator size="large" />
  //       <Text>teste</Text>
  //     </Box>
  //   );
  // }
  console.log('log');

  return (
    <NavigationContainer>
      {/* {authCredentials ? <AppStackScreen /> : <AuthStackScreen />} */}
      {/* <Text>teste</Text> */}
      <AppStackScreen />
      {/* <AuthStackScreen /> */}
    </NavigationContainer>
  );
}
