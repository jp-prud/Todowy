import { createContext, useContext, useMemo, useRef, useState } from 'react';

import { useAuthContext } from '@context';
import { TaskProps } from '@types';
import { useListTasks } from '@useCases';
import { Control, useForm } from 'react-hook-form';

import { useDebounce } from '@hooks';

import { FilterOptions } from '@services';
import { SearchFormSchemaTypes, searchFormDefaultValues } from './components';

interface HomeScreenContextProps {
  filteredTasks: TaskProps[];
  getLisTasks: any;
  isLoading: boolean;
  globalLoading: boolean;
  searchTerm?: string;
  handlePressSelectFilterOption(option: string): void;
  handlePressSaveFilterOption(): void;
  handlePressClearFilter(): void;
  filterOptions?: FilterOptions;
  searchControl: Control<
    {
      searchTerm: string;
    },
    any
  >;
}

const HomeScreenContext = createContext<HomeScreenContextProps>(
  {} as HomeScreenContextProps,
);

export function HomeScreenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading: AuthCredentialIsLoading, authCredentials } =
    useAuthContext();

  const [filterOption, setFilterOption] = useState<FilterOptions | undefined>(undefined);
  const selectedFilterOption = useRef<FilterOptions | undefined>(undefined);

  const { tasks, isLoading, getLisTasks } = useListTasks(
    authCredentials?.email!,
    filterOption,
  );

  const { control: searchControl, watch } = useForm<SearchFormSchemaTypes>({
    mode: 'onChange',
    defaultValues: searchFormDefaultValues,
  });

  const searchTerm = useDebounce(watch('searchTerm'), 300);

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

  function handlePressSelectFilterOption(option: string) {
    selectedFilterOption.current = {
      status: option as FilterOptions['status'],
    };
  }

  function handlePressSaveFilterOption() {
    setFilterOption(selectedFilterOption.current);
  }

  function handlePressClearFilter() {
    selectedFilterOption.current = undefined;
    setFilterOption(undefined)
  }

  return (
    <HomeScreenContext.Provider
      value={{
        filteredTasks,
        getLisTasks,
        isLoading,
        globalLoading: AuthCredentialIsLoading,
        searchTerm: watch('searchTerm'),
        searchControl,
        handlePressSaveFilterOption,
        handlePressClearFilter,
        handlePressSelectFilterOption,
        filterOptions: selectedFilterOption.current,
      }}
    >
      {children}
    </HomeScreenContext.Provider>
  );
}

export function useHomeScreen() {
  return useContext(HomeScreenContext);
}
