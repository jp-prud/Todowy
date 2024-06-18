import { z } from 'zod';

export const EditTaskForm = z.object({
  title: z.string().min(5, { message: 'Title is required' }),
  description: z.string(),
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Priority is required',
  }),
  due_date: z.string(),
});

export type EditTaskFormSchema = z.infer<typeof EditTaskForm>;
