import { ProjectProps, StorageKeys } from '@types';

import { storage } from '../StorageService/storage';

export function ProjectService() {
  async function listProjects() {
    const projects = await storage.getItem<ProjectProps[]>(
      StorageKeys.Projects,
    );

    if (!projects) {
      return [];
    }

    return projects;
  }

  async function createProject(project: ProjectProps) {
    const projects = await storage.getItem<ProjectProps[]>(
      StorageKeys.Projects,
    );

    const updatedProjects = projects ? [project, ...projects] : [project];

    await storage.setItem(StorageKeys.Projects, updatedProjects);
  }

  return {
    listProjects,
    createProject,
  };
}
