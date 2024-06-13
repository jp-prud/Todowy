import React from 'react';

import Svg from 'react-native-svg';

import { IconBase } from '@components';

export function CheckmarkAlertShield({ color = 'black', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <path
        fill={color}
        d="M13.956 22.813c.158 0 .396-.053.624-.176 5.054-2.751 6.812-4.026 6.812-7.225V8.776c0-1.054-.405-1.432-1.292-1.81-.967-.413-4.254-1.556-5.204-1.881a3.2 3.2 0 0 0-.94-.158c-.299 0-.641.079-.932.158-.949.272-4.236 1.477-5.203 1.88-.887.37-1.292.757-1.292 1.811v6.636c0 3.2 1.758 4.456 6.812 7.225.228.123.466.175.615.175m0-1.864c-.123 0-.246-.044-.5-.202-4.009-2.443-5.257-3.102-5.257-5.66v-6.03c0-.316.062-.439.308-.544 1.3-.519 3.823-1.354 4.983-1.81a1.4 1.4 0 0 1 .466-.098c.132 0 .273.027.475.097 1.16.457 3.665 1.345 4.974 1.81.255.097.317.23.317.546v6.029c0 2.575-1.301 3.27-5.256 5.66-.255.158-.378.202-.51.202m-.94-3.366c.325 0 .597-.158.782-.448l3.964-6.17c.123-.185.22-.396.22-.598 0-.44-.387-.73-.81-.73-.263 0-.5.15-.685.449l-3.498 5.581-1.635-2.065c-.21-.273-.421-.37-.676-.37a.78.78 0 0 0-.782.791c0 .211.079.405.228.598l2.074 2.523c.237.298.492.439.818.439"
      />
    </Svg>
  );
}
