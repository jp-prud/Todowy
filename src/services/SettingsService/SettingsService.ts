import { Settings, StorageKeys } from '@types';

import { storage } from '../StorageService/storage';

export function SettingService() {
  async function getSettings() {
    return storage.getItem<Settings>(StorageKeys.Settings);
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
