import { SettingService } from '@services';

import BootSplash from 'react-native-bootsplash';

export function useSettings() {
  const { getSettings: getSettingsService } = SettingService();

  function getSettings() {
    return getSettingsService();
  }

  async function hideSplashScreen() {
    try {
      const isVisible = await BootSplash.isVisible();
      if (isVisible) {
        BootSplash.hide({fade: true});
      }
    } catch (error) {
      BootSplash.hide();
    }
  }

  return {
    getSettings,
    hideSplashScreen,
  };
}
