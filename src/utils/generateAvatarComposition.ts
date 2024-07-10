import { AvatarListPresetUI } from '@components';

import { images } from '../assets';

export function generateAvatarComposition() {
  const randomColorIndex = randomIndex(AvatarListPresets.length);
  const randomIconIndex = randomIndex(AvatarListPresets.length);

  const randomIcon: AvatarListPresetUI = {
    id: AvatarListPresets[randomIconIndex].id,
    icon: AvatarListPresets[randomIconIndex].icon,
    color: AvatarListPresets[randomColorIndex].color,
  };

  return randomIcon;
}

function randomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

export const AvatarListPresets: AvatarListPresetUI[] = [
  {
    id: '1',
    icon: images.emojis.blowFish,
    color: 'yellow',
  },
  {
    id: '2',
    icon: images.emojis.fox,
    color: 'blue',
  },
  {
    id: '3',
    icon: images.emojis.hamster,
    color: 'lightBlue',
  },
  {
    id: '4',
    icon: images.emojis.honeyBee,
    color: 'yellow',
  },
  {
    id: '5',
    icon: images.emojis.lion,
    color: 'pink',
  },
  {
    id: '6',
    icon: images.emojis.pig,
    color: 'yellow',
  },
  {
    id: '7',
    icon: images.emojis.polarBear,
    color: 'lightBlue',
  },
  {
    id: '8',
    icon: images.emojis.rabbit,
    color: 'pink',
  },
  {
    id: '9',
    icon: images.emojis.turtle,
    color: 'purple',
  },
  {
    id: '10',
    icon: images.emojis.lizard,
    color: 'iconGreen',
  },
];
