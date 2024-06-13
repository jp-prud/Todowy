import { z } from 'zod';

export const SearchForm = z.object({
  searchTerm: z.string(),
});

export type SearchFormSchemaTypes = z.infer<typeof SearchForm>;

export const searchFormDefaultValues: SearchFormSchemaTypes = {
  searchTerm: '',
};
