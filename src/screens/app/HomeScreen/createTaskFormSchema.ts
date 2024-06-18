import dayjs from 'dayjs';
import { z } from 'zod';

export const CreateTaskForm = z.object({
  title: z.string().min(5, { message: 'Title is required' }),
  description: z.string(),
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Priority is required',
  }),
  due_date: z.string(),
});

export type CreateTaskFormSchema = z.infer<typeof CreateTaskForm>;

export const createTaskFormDefaultValues: CreateTaskFormSchema = {
  title: '',
  description: '',
  priority: 'medium',
  due_date: dayjs().toISOString(),
};
