import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function ReloadIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M12 19a7.23 7.23 0 0 1-5.155-2.154 7.535 7.535 0 0 1-2.194-5.2l-.365.375a.75.75 0 0 1-1.225-.23.753.753 0 0 1 .152-.816l1.651-1.687a.751.751 0 0 1 1.072 0l1.65 1.687a.753.753 0 0 1 .152.821.732.732 0 0 1-.165.236.75.75 0 0 1-1.06-.007l-.362-.368A5.956 5.956 0 0 0 12 17.5a5.788 5.788 0 0 0 4.355-2 .759.759 0 0 1 .566-.255.751.751 0 0 1 .562 1.244A7.307 7.307 0 0 1 12 19Zm6.6-5.063a.758.758 0 0 1-.535-.225l-1.651-1.687a.756.756 0 0 1-.152-.823.73.73 0 0 1 .165-.235.75.75 0 0 1 1.06.007l.362.367A5.956 5.956 0 0 0 12 5.5a5.79 5.79 0 0 0-4.355 1.995.757.757 0 0 1-.566.255.74.74 0 0 1-.493-.188.75.75 0 0 1-.07-1.062A7.308 7.308 0 0 1 12 4a7.23 7.23 0 0 1 5.155 2.153 7.535 7.535 0 0 1 2.194 5.2l.365-.375a.75.75 0 0 1 1.06-.007.73.73 0 0 1 .226.519.755.755 0 0 1-.213.535l-1.651 1.688a.76.76 0 0 1-.536.225v-.001Z"
      />
    </Svg>
  );
}
