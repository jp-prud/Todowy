import { Settings, StorageKeys } from '@types';

import { storage } from '../StorageService/storage';

export function SettingService() {
  async function getSettings() {
    const settings = await storage.getItem<Settings>(StorageKeys.Settings);

    return settings;
  }

  async function finishOnboarding() {
    const settings = await storage.getItem<Settings>(StorageKeys.Settings);

    const updatedSettings = {
      ...settings,
      showOnboarding: false,
    };

    storage.setItem(StorageKeys.Settings, updatedSettings);
  }

  return {
    getSettings,
    finishOnboarding,
  };
}
