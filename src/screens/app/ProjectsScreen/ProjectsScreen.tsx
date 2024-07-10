import { Box, Icon, ProjectItem, Screen, Text, TitleBar } from "@components";
import { AppScreenProps } from "@routes";

import { ProjectListProps } from '@types';
import { FlatList, ListRenderItemInfo } from "react-native";
import { useProjectsScreen } from "./useProjectsScreen";

export function ProjectsScreen({ navigation }: AppScreenProps<'ProjectsScreen'>) {
  const { projects, isLoading } = useProjectsScreen()

  function renderProjectItem({
    item: project
  }: ListRenderItemInfo<ProjectListProps>) { 
    return (
      <ProjectItem {...project} />
    );
  }

  function renderItemSeparator() { 
    return <Box width={16} height={16} />
  }

  
  function renderEmptyList() {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        g="s4">
        <Text preset="paragraphLarge" semiBold>
          No projects :(
        </Text>
        <Text color="neutral500" textAlign="center">
          There is no projects. Create one ?
        </Text>
      </Box>
    );
  }

  return (
    <Screen title="Projects" isLoading={isLoading}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s16">
        <TitleBar title="Your projects" /> 

        <Icon name="plus" color="neutral500" onPress={() => navigation.navigate('CreateProjectScreen')} />
      </Box>

      <Box flex={1}>
        <FlatList
          numColumns={2}
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={renderProjectItem}
          ItemSeparatorComponent={renderItemSeparator}
          contentContainerStyle={{ gap: 16, flex: 1 }}
          ListEmptyComponent={renderEmptyList}
        />
      </Box>
    </Screen>
  )
}