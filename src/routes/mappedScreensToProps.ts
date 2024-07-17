import { ScreenTabBarButtonProps } from '@components';
import { AppTabNavigatorParamList } from '@routes';

export const mappedScreensToProps: Record<
  keyof AppTabNavigatorParamList,
  ScreenTabBarButtonProps
> = {
  HomeScreen: {
    label: 'Home',
    icon: {
      focused: 'houseFill',
      unfocused: 'house',
    },
  },
  ProjectsScreen: {
    label: 'Projects',
    icon: {
      focused: 'blocksFill',
      unfocused: 'blocks',
    },
  },
  // ListScreen: {
  //   label: 'Favoritos',
  //   icon: {
  //     focused: 'favorite',
  //     unfocused: 'favorite',
  //   },
  // },
  // ProfileScreen: {
  //   label: 'Perfil',
  //   icon: {
  //     focused: 'user',
  //     unfocused: 'user',
  //   },
  // },
};
