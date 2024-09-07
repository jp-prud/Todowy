import { AnalyticsKeys, env } from '@types';
import { usePostHog } from 'posthog-react-native';

export function AnalyticsService() {
  const posthog = usePostHog();

  function capture(
    event: keyof typeof AnalyticsKeys,
    properties: Record<string, any>,
  ) {
    if (env.ENV === 'production') {
      posthog.capture(event, properties);
    }
  }

  return {
    capture,
  };
}
