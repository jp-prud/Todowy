import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';

import { ScreenProps } from '../Screen';

const ICON_SIZE = 24;

export function ScreenHeader({
  title,
  titleComponent,
  rightHeaderComponent,
  canGoBack,
}: Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'titleComponent' | 'rightHeaderComponent'
>) {
  const { goBack } = useNavigation();

  function renderBackButton() {
    return (
      <TouchableOpacityBox
        gap="s4"
        flexDirection="row"
        alignItems="center"
        onPress={goBack}>
        <Box style={{ transform: [{ scaleX: -1 }] }}>
          <Icon name="chevron" color="neutral700" />
        </Box>

        {!title && !titleComponent && (
          <Text semiBold color="neutral700">
            Back
          </Text>
        )}
      </TouchableOpacityBox>
    );
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent={title ? 'space-between' : 'flex-start'}
      mb="s24"
      testID="screen-header-component">
      {canGoBack && renderBackButton()}

      {titleComponent && !title && (
        <Box flex={1} justifyContent="center" alignItems="center">
          {titleComponent}
        </Box>
      )}

      {title && !titleComponent && (
        <Box flex={1}>
          <Text preset="headingSmall" textAlign="center">
            {title}
          </Text>
        </Box>
      )}

      {title && canGoBack && !rightHeaderComponent && <Box width={ICON_SIZE} />}
      {title && canGoBack && rightHeaderComponent && (
        <Box width={ICON_SIZE}>{rightHeaderComponent}</Box>
      )}
    </Box>
  );
}
