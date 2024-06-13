import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function HouseFillIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none"><Path fill={color} d="M3.251 13.215c0 .457.352.852.914.852.272 0 .519-.149.738-.325l8.72-7.321c.245-.211.526-.211.773 0l8.71 7.321c.21.176.456.325.729.325.518 0 .914-.325.914-.835a.9.9 0 0 0-.343-.73l-2.47-2.073V6.772c0-.395-.254-.641-.65-.641h-1.213c-.387 0-.65.246-.65.641v1.539l-4.166-3.498c-.765-.642-1.732-.642-2.496 0l-9.158 7.69a.92.92 0 0 0-.352.712m2.856 7.901c0 1.266.791 2.03 2.101 2.03h11.593c1.3 0 2.1-.764 2.1-2.03v-6.68l-7.356-6.16c-.343-.3-.756-.29-1.09 0l-7.348 6.16zm10.204.378h-4.614V15.87c0-.413.273-.677.686-.677h3.252c.413 0 .676.264.676.677z"/></Svg>
  );
}
