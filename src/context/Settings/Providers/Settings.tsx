import { createContext, useEffect, useState } from 'react';

import { Settings } from '@types';
import { useSettings } from '@useCases';

import { SettingsServiceProps } from '../Settings.types';

export const SettingsContext = createContext<SettingsServiceProps>(
  {} as SettingsServiceProps,
);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings | null>({
    showOnboarding: false,
  });

  const { getSettings } = useSettings();

  useEffect(() => {
    (async () => {
      const storageSettings = await getSettings();

      setSettings(storageSettings);
    })();
  }, [getSettings]);

  return (
    <SettingsContext.Provider value={{ settings: settings! }}>
      {children}
    </SettingsContext.Provider>
  );
}
