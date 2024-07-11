import { storage } from '@services';
import BootSplash from 'react-native-bootsplash';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SettingsStore = {
  showOnboarding: boolean;
  finishOnboarding: () => void;
};

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      showOnboarding: true,
      finishOnboarding: () => {
        set({showOnboarding: false});
      },
    }),
    {
      name: '@Settings',
      storage: storage,
    },
  ),
);

export function useSettings() {
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

  const showOnboarding = useSettingsStore(state => state.showOnboarding);

  const toggleOnboardingStatus = useSettingsStore(state => state.finishOnboarding);

  return {
    showOnboarding,
    toggleOnboardingStatus,
    hideSplashScreen,
  };
}