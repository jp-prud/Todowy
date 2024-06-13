import React from 'react';

import { Screen } from '@components';
import { AppScreenProps } from '@routes';

import { useEditTaskScreen } from './useEditTaskScreen';

export function EditTaskScreen({ route }: AppScreenProps<'EditTaskScreen'>) {
  const { params } = route;

  const { task, isLoading } = useEditTaskScreen(params.taskId);

  // if (!task) {
  //   return null;
  // }

  // const { description, priority, category } = task;

  return (
    <Screen canGoBack isLoading={isLoading}>
      {/* <Text>{description}</Text>
      <Text>{priority}</Text>
      <Text>{category}</Text> */}
    </Screen>
  );
}
