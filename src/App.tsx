import { AuthProvider, ToastProvider } from '@context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as Sentry from '@sentry/react-native';
import { initializeStorage, MMKVStorage } from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';
import { Router } from '@routes';
import { theme } from '@theme';

import { env } from './types/env';

Sentry.init({
  dsn: 'https://52e306a278972bf4c39f46bf85a0f1b7@o4507662892728320.ingest.us.sentry.io/4507662895022080',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  _experiments: {
    // profilesSampleRate is relative to tracesSampleRate.
    // Here, we'll capture profiles for 100% of transactions.
    profilesSampleRate: 1.0,
  },
});
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
              <ToastProvider>
                <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
              </ToastProvider>
            </ThemeProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

function App() {
  if (env.ENV === 'development') {
    return (
      <AppWithProviders>
        <Router />
        <Toast />
      </AppWithProviders>
    );
  }

  return (
    <Sentry.ErrorBoundary>
      <AppWithProviders>
        <Router />
        <Toast />
      </AppWithProviders>
    </Sentry.ErrorBoundary>
  );
}

export default App;
