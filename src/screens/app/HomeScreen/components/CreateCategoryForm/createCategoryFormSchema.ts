import { z } from 'zod';

export const CreateCategoryForm = z.object({
  name: z.string({
    required_error: 'Category name is required',
  }),
});

export type CreateCategoryFormSchema = z.infer<typeof CreateCategoryForm>;

export const createCategoryFormDefaultValues: CreateCategoryFormSchema = {
  name: '',
};
