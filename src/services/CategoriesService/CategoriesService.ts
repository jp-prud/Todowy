import { CategoryProps, CreateCategoryDTO, StorageKeys } from '@types';

import { storage } from '../StorageService/storage';

export function CategoriesService() {
  async function getCategories(email: string) {
    const categoriesList = await storage.getItem<CategoryProps[]>(
      `${StorageKeys.Categories}-${email}`,
    );

    return categoriesList;
  }

  async function getCategoryByName(categoryName: string, email: string) {
    const categoriesList = await storage.getItem<CategoryProps[]>(`${StorageKeys.Categories}-${email}`);

    if (!categoriesList) {
      return null;
    }

    return categoriesList.find(category => category.name === categoryName)
  }

  async function createCategory(category: CreateCategoryDTO, email: string) {
    const categoriesList = await storage.getItem<CategoryProps[]>(
      `${StorageKeys.Categories}-${email}`,
    );

    if (!categoriesList) {
      return storage.setItem(`${StorageKeys.Categories}-${email}`, [category]);
    }

    return storage.setItem(`${StorageKeys.Categories}-${email}`, [
      ...categoriesList,
      category,
    ]);
  }

  function removeCategory() {}

  return {
    getCategoryByName,
    createCategory,
    getCategories,
    removeCategory,
  };
}
