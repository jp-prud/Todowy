import { useMemo } from 'react';

import { useAuthContext } from '@context';
import { useListTasks } from '@useCases';
import { useForm } from 'react-hook-form';

import { useDebounce } from '@hooks';

import { searchFormDefaultValues } from './searchFormSchema';

export function useHomeScreen() {
  const { authCredentials, isLoading: isAuthCredentialLoading } =
    useAuthContext();

  const {
    tasks,
    numberOfCompletedTasks,
    numberOfTotalTasks,
    isLoading,
    getLisTasks,
  } = useListTasks();

  const { control: searchControl, watch: searchWatch } = useForm({
    mode: 'onChange',
    defaultValues: searchFormDefaultValues,
  });

  const searchTerm = useDebounce(searchWatch('searchTerm'), 260);

  const filteredTasks = useMemo(() => {
    if (!tasks) {
      return [];
    }

    if (!searchTerm) {
      return tasks;
    }

    return tasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [tasks, searchTerm]);

  return {
    filteredTasks,
    control: searchControl,
    searchTerm,
    numberOfCompletedTasks,
    numberOfTotalTasks,
    isLoading,
    getLisTasks,
    authCredentials,
    isAuthCredentialLoading,
  };
}
