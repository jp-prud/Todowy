import React from 'react';

import { useAuthContext, useToastService } from '@context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateCategory, useGetCategories } from '@useCases';
import { useForm } from 'react-hook-form';

import {
  AnimatedBox,
  BottomSheetFooter,
  BottomSheetHeader,
  Box,
  Button,
  FormTextInput,
} from '@components';

import {
  CreateCategoryForm as CategoryFormResolver,
  CreateCategoryFormSchema,
  createCategoryFormDefaultValues,
} from './createCategoryFormSchema';

interface CreateCategoryFormProps {
  onClose: () => void;
}

export function CreateCategoryForm({ onClose }: CreateCategoryFormProps) {
  const { showToast } = useToastService();
  const { authCredentials } = useAuthContext();

  const { control,  handleSubmit, reset, setError, setFocus } = useForm<CreateCategoryFormSchema>({
    defaultValues: createCategoryFormDefaultValues,
    resolver: zodResolver(CategoryFormResolver),
  });

  const { createCategory, createCategoryIsLoading } = useCreateCategory({
    errorMessage: 'An error occurred while creating the category.',
    onSuccess: () => {
      showToast({
        type: 'success',
        message: 'Category created successfully!',
      });

      reset()
    },
    onError: () => {
      showToast({
        type: 'info',
        message: 'An error occurred while creating the category.',
      });
    },
  });

  const { categories, categoriesIsLoading } = useGetCategories(authCredentials!.email)

  const onHandleSubmitPress = handleSubmit(data => {
    const categoryIsAlreadyCreated = categories?.find(category => category.name === data.name);

    if (categoryIsAlreadyCreated) {
      setError('name', {
        message: 'Category already exists.',
      });

      setFocus('name');

      return;
    }

    createCategory({
      category: data,
      email: authCredentials!.email,
    });
  });

  return (
    <>
      <BottomSheetHeader
        title="Creating category"
        description="Create a new category to organize your tasks."
      />

      <AnimatedBox>
        <Box gap="s20">
          <FormTextInput
            label="Name"
            description="What's the new category name?"
            name="name"
            control={control}
          />
        </Box>
      </AnimatedBox>

      <BottomSheetFooter>
        <Button
          flex={1}
          text="It's nice, create!"
          onPress={onHandleSubmitPress}
          loading={createCategoryIsLoading || categoriesIsLoading}
          disabled={createCategoryIsLoading || categoriesIsLoading}
        />
      </BottomSheetFooter>
    </>
  );
}
