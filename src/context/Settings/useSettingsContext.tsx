import { useContext } from 'react';

import { SettingsContext } from './Providers/Settings';
import { SettingsServiceProps } from './Settings.types';

export function useSettingsContext(): SettingsServiceProps {
  const settingsContext = useContext(SettingsContext);

  if (!settingsContext) {
    throw new Error('useSettingsContext must be used within a AuthProvider');
  }

  return settingsContext;
}
