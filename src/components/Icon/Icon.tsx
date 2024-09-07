import { Pressable } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import {
  ArchiveBoxFillIcon,
  ArchiveBoxIcon,
  BellIcon,
  BlocksIcon,
  BlocksIconFill,
  CalendarIcon,
  CheckmarkAlertShield,
  CheckmarkIcon,
  ChevronIcon,
  CloseIcon,
  EyeIcon,
  EyeSlashIcon,
  FilterIcon,
  GearshapeIcon,
  HouseFillIcon,
  HouseIcon,
  PencilIcon,
  PlusIcon,
  ReloadIcon,
  SearchIcon,
  TagIcon,
  TrashIcon,
} from '../../assets/icons';
import { Box } from '../Box/Box';

export interface IconBase {
  size?: number;
  color?: string;
  testID?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?(): void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const Icon = <SVGIcon color={colors[color]} size={size} />;

  if (onPress) {
    return (
      <Pressable testID="Icon" hitSlop={16} onPress={onPress} style={{}}>
        {Icon}
      </Pressable>
    );
  }

  return <Box testID="Icon">{Icon}</Box>;
}

const iconRegistry = {
  chevron: ChevronIcon,
  close: CloseIcon,
  calendar: CalendarIcon,
  plus: PlusIcon,
  bell: BellIcon,
  gearshape: GearshapeIcon,
  house: HouseIcon,
  houseFill: HouseFillIcon,
  archiveBoxFill: ArchiveBoxFillIcon,
  archiveBox: ArchiveBoxIcon,
  search: SearchIcon,
  checkmark: CheckmarkIcon,
  trash: TrashIcon,
  pencil: PencilIcon,
  tag: TagIcon,
  reload: ReloadIcon,
  checkmarkAlert: CheckmarkAlertShield,
  eye: EyeIcon,
  eyeSlash: EyeSlashIcon,
  blocks: BlocksIcon,
  blocksFill: BlocksIconFill,
  filter: FilterIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
