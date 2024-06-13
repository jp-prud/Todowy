import {Svg, Path, G} from 'react-native-svg';

import {IconBase} from '@components';

export function KeyboardIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size}>
      <G fill="none" fill-rule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6a2 2 0 0 1 1.85-1.995L4 4h16Zm0 2H4v12h16V6Zm-3 8a1 1 0 0 1 .117 1.993L17 16H7a1 1 0 0 1-.117-1.993L7 14h10Zm-9-3a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1Zm4.5 0a1 1 0 0 1 .117 1.993L12.5 13h-1a1 1 0 0 1-.117-1.993L11.5 11h1Zm4.5 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM8 8a1 1 0 0 1 .117 1.993L8 10H7a1 1 0 0 1-.117-1.993L7 8h1Zm4.5 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM17 8a1 1 0 0 1 .117 1.993L17 10h-1a1 1 0 0 1-.117-1.993L16 8h1Z"
        />
      </G>
    </Svg>
  );
}
