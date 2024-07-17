import { z } from 'zod';

export const CreateProjectFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(4, {
      message: 'Name must be at least 4 characters',
    })
    .max(20, {
      message: 'Name must be at most 20 characters',
    }),
  color: z.string({
    required_error: 'Color is required',
  }),
});

export type CreateProjectFormSchemaTypes = z.infer<
  typeof CreateProjectFormSchema
>;

export const DEFAULT_CREATE_PROJECT_FORM_VALUES: CreateProjectFormSchemaTypes =
  {
    name: '',
    color: '',
  };
