import { SettingService } from '@services';

export function useSettings() {
  const { getSettings: getSettingsService } = SettingService();

  function getSettings() {
    return getSettingsService();
  }

  return {
    getSettings,
  };
}
