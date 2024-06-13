import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';

import { ButtonPreset } from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
  icon?: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
      icon: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
      icon: 'neutral400',
    },
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'white',
      },
      content: 'primary',
      icon: 'primary',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
      icon: 'neutral400',
    },
  },
  positive: {
    default: {
      container: {
        backgroundColor: 'greenLight',
      },
      content: 'primaryContrast',
      icon: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
      icon: 'neutral400',
    },
  },
  negative: {
    default: {
      container: {
        backgroundColor: 'red600',
      },
      content: 'primaryContrast',
      icon: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
      icon: 'neutral400',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 2,
        borderColor: 'primary',
      },
      content: 'primary',
      icon: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'neutral300',
      },
      content: 'neutral300',
      icon: 'neutral300',
    },
  },
  invertedOutline: {
    default: {
      container: {
        borderWidth: 2,
        borderColor: 'white',
      },
      content: 'white',
      icon: 'white',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'neutral300',
      },
      content: 'neutral300',
      icon: 'neutral300',
    },
  },
};
