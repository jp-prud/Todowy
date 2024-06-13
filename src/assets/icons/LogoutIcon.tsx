import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function LogoutIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M20.485 18.657a2.76 2.76 0 0 1-2.697 2.829H8.829a.732.732 0 0 1-.686-.771.732.732 0 0 1 .686-.771h8.959a1.31 1.31 0 0 0 1.326-1.287V6.315a1.31 1.31 0 0 0-1.326-1.286H8.829a.777.777 0 0 1 0-1.543h8.959a2.763 2.763 0 0 1 2.7 2.829l-.003 12.342Zm-6.634-5.348h-7.7l2.8 2.8a.772.772 0 1 1-1.097 1.088L3.74 13.086a.772.772 0 0 1 0-1.092l4.114-4.116a.772.772 0 1 1 1.092 1.091l-2.8 2.8h7.7c.256 0 .463.346.463.771 0 .425-.202.769-.458.769Z"
      />
    </Svg>
  );
}
