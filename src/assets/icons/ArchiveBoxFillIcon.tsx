import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function ArchiveBoxFillIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none"><Path fill={color} d="M6.723 9.629h14.563c1.064 0 1.6-.615 1.6-1.67v-.835c0-1.055-.536-1.67-1.6-1.67H6.723c-1.02 0-1.609.615-1.609 1.67v.835c0 1.055.545 1.67 1.609 1.67M9.175 21.88h9.65c1.81 0 2.804-.967 2.804-2.777V10.92H6.37v8.183c0 1.81.993 2.777 2.804 2.777m1.995-7.603c-.413 0-.712-.299-.712-.73v-.28c0-.44.299-.73.712-.73h5.669c.422 0 .72.29.72.73v.28c0 .431-.307.73-.72.73z"/></Svg>
  );
}
