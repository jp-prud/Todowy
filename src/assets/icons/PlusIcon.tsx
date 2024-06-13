import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function PlusIcon({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M7.637 14.656h5.361v5.362c0 .544.448 1.002 1.002 1.002s1.002-.457 1.002-1.002v-5.362h5.361c.545 0 1.002-.448 1.002-1.002 0-.553-.457-1.002-1.002-1.002h-5.361V7.291c0-.545-.448-1.002-1.002-1.002s-1.002.457-1.002 1.002v5.361H7.637c-.545 0-1.002.449-1.002 1.002 0 .554.457 1.002 1.002 1.002"
      />
    </Svg>
  );
}
