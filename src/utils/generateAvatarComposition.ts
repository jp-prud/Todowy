import { AvatarListPresetUI } from '@components';

import { ThemeColors } from '@theme';
import { images } from '../assets';

export function generateAvatarComposition() {
  const { length } = AvatarListPresets

  const randomColorIndex = randomIndex(length);
  const randomIconIndex = randomIndex(length);

  const randomIcon: AvatarListPresetUI = {
    icon: AvatarListPresets[randomIconIndex].icon,
    color: AvatarListPresets[randomColorIndex].color as ThemeColors,
  };

  return randomIcon;
}

function randomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

export const AvatarListPresets: Array<AvatarListPresetUI> = [
  { icon: images.emojis.blowFish, color: 'yellow' },
  { icon: images.emojis.fox, color: 'blue' },
  { icon: images.emojis.hamster, color: 'lightBlue' },
  { icon: images.emojis.honeyBee, color: 'yellow' },
  { icon: images.emojis.lion, color: 'pink' },
  { icon: images.emojis.pig, color: 'yellow' },
  { icon: images.emojis.polarBear, color: 'lightBlue' },
  { icon: images.emojis.rabbit, color: 'pink' },
  { icon: images.emojis.turtle, color: 'purple' },
  { icon: images.emojis.bear, color: 'iconGreen' },
  { icon: images.emojis.cow, color: 'lightBlue' },
  { icon: images.emojis.frog, color: 'iconGreen' },
  { icon: images.emojis.koala, color: 'yellow' },
  { icon: images.emojis.dog, color: 'iconGreen' },
  { icon: images.emojis.lizard, color: 'pink' },
];