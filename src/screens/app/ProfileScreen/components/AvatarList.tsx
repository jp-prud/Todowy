import { FlatList } from 'react-native';

import { AvatarListPresets } from '@utils';

import { Avatar, Box, TouchableOpacityBox } from '@components';

import { useProfileScreen } from '../useProfileScreen';

export function AvatarList() {
  const { handleSelectAvatar } = useProfileScreen();

  return (
    <Box>
      <FlatList
        data={AvatarListPresets}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingVertical: 16,
        }}
        renderItem={({ item }) => (
          <TouchableOpacityBox
            onPress={() =>
              handleSelectAvatar({
                icon: item.icon,
                id: item.id,
              })
            }>
            <Avatar
              avatar={{
                ...item,
              }}
              size={72}
            />
          </TouchableOpacityBox>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}
