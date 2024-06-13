import { Pressable } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import {
  ArrowIcon,
  ArticleIcon,
  BellIcon,
  CheckIcon,
  ChevronIcon,
  ClockIcon,
  CloseIcon,
  EyeOffIcon,
  EyeOnIcon,
  FavoriteIcon,
  HappyEmojiIcon,
  HeartIcon,
  HomeIcon,
  KeyboardIcon,
  LineIcon,
  ListCheckIcon,
  ListOrderedLineIcon,
  LogoutIcon,
  MessageIcon,
  PencilIcon,
  RedoIcon,
  ReloadIcon,
  SadEmojiIcon,
  SearchIcon,
  ShareIcon,
  SmileEmojiIcon,
  SuccessIcon,
  TextBoldIcon,
  TextDefaultIcon,
  TextHeadingIcon,
  TextItalicIcon,
  TextLinkIcon,
  TextStrikethroughIcon,
  TextUnderlineIcon,
  UndoIcon,
  UserIcon,
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
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const Icon = <SVGIcon color={colors[color]} size={size} />;

  if (onPress) {
    return (
      <Pressable testID="Icon" hitSlop={10} onPress={onPress} style={{}}>
        {Icon}
      </Pressable>
    );
  }

  return <Box testID="Icon">{Icon}</Box>;
}

const iconRegistry = {
  arrow: ArrowIcon,
  article: ArticleIcon,
  bell: BellIcon,
  clock: ClockIcon,
  check: CheckIcon,
  chevron: ChevronIcon,
  close: CloseIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  heart: HeartIcon,
  home: HomeIcon,
  favorite: FavoriteIcon,
  logout: LogoutIcon,
  listCheck: ListCheckIcon,
  listOrder: ListOrderedLineIcon,
  message: MessageIcon,
  pencil: PencilIcon,
  reload: ReloadIcon,
  search: SearchIcon,
  share: ShareIcon,
  user: UserIcon,
  redo: RedoIcon,
  keyboard: KeyboardIcon,
  undo: UndoIcon,
  textBold: TextBoldIcon,
  textItalic: TextItalicIcon,
  textLink: TextLinkIcon,
  textStriketrough: TextStrikethroughIcon,
  textUnderline: TextUnderlineIcon,
  line: LineIcon,
  textHeading: TextHeadingIcon,
  textDefault: TextDefaultIcon,
  success: SuccessIcon,
  happyEmoji: HappyEmojiIcon,
  sadEmoji: SadEmojiIcon,
  smileEmoji: SmileEmojiIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
