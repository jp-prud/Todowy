import { ThemeColors } from '@theme';

import { TaskProps } from './Task';

export interface ProjectProps {
  id: string;
  name: string;
  tasks: TaskProps[];
  color: ThemeColors;
}

export type ProjectListProps = Omit<ProjectProps, 'tasks'>;

export const projects: ProjectProps[] = [
  {
    id: '1',
    name: 'Progress',
    color: 'green',
    tasks: [],
  },
  {
    id: '2',
    name: 'Progress',
    color: 'green',
    tasks: [],
  },
];
