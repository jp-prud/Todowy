import { AuthProvider, ToastProvider } from '@context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { MMKVStorage, initializeStorage } from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import {Toast} from '@components';
import { Toast } from '@components';
import { Router } from '@routes';
import { theme } from '@theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

initializeStorage(MMKVStorage);

function AppWithProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
              <BottomSheetModalProvider>
                <ToastProvider>{children}</ToastProvider>
              </BottomSheetModalProvider>
            </ThemeProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

function App() {
  return (
    <AppWithProviders>
      <Router />
      <Toast />
    </AppWithProviders>
  );
}

export default App;
