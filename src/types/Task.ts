export type TaskStatus = 'completed' | 'pending';

export type TaskPriority = 'low' | 'medium' | 'high';

export type TaskCategory = 'work' | 'personal' | 'others';

export interface TaskProps {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  category: TaskCategory;
  created_at: string;
  due_date: string;
  assigned_to: string;
  tags?: string[];
  note?: string;
  comments?: TaskComments[];
}

interface TaskComments {
  id: string;
  content: string;
  created_at: string;
}

export type CreateTaskDTO = Omit<TaskProps, 'id' | 'status' | 'created_at'>;

export interface CompleteTaskDTO {
  id: string;
}

export type TaskPriorityItemType = {
  label: string;
  value: TaskPriority;
};

export const MOCKED_TASKS_PRIORITY: TaskPriorityItemType[] = [
  {
    label: 'Low Priority',
    value: 'low',
  },
  {
    label: 'Medium Priority',
    value: 'medium',
  },
  {
    label: 'High Priority',
    value: 'high',
  },
];

export const ONBOARDING_MOCKED_TASKS: TaskProps[] = [
  {
    id: '1',
    title: 'Create a task',
    description: 'Write down your task so you do not forget.',
    status: 'pending',
    priority: 'low',
    category: 'work',
    created_at: '2024-06-12T19:26:32.506Z',
    due_date: '2024-06-12T19:26:32.506Z',
    assigned_to: 'John Doe',
    tags: ['work', 'personal'],
    note: 'This is a note',
  },
  {
    id: '2',
    title: 'Increease your productivity',
    description: 'Organize your tasks and increase your productivity.',
    status: 'pending',
    priority: 'medium',
    category: 'personal',
    created_at: '2024-06-12T19:26:32.506Z',
    due_date: '2024-06-12T19:26:32.506Z',
    assigned_to: 'John Doe',
    tags: ['work', 'personal'],
  },
];
