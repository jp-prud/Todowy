import { StorageKeys, TaskProps } from '@types';

import { storage } from '../StorageService/storage';

export function TaskService() {
  async function getTaskById(taskId: string): Promise<TaskProps | undefined> {
    const tasksList = await storage.getItem<TaskProps[]>(StorageKeys.Tasks);

    const task = tasksList!.find(_task => _task.id === taskId);

    return task;
  }

  async function listTasks() {
    const tasks = await storage.getItem<TaskProps[]>(StorageKeys.Tasks);

    if (!tasks) {
      return [];
    }

    return tasks;
  }

  async function createTask(task: TaskProps) {
    const tasks = await storage.getItem<TaskProps[]>(StorageKeys.Tasks);

    const updatedTasks = tasks ? [task, ...tasks] : [task];

    await storage.setItem(StorageKeys.Tasks, updatedTasks);
  }

  async function completeTask(taskId: string) {
    const tasks = await storage.getItem<TaskProps[]>(StorageKeys.Tasks);

    const updatedTasks = tasks!.map(task => {
      if (task.id === taskId) {
        const updatedStatus =
          task.status === 'completed' ? 'pending' : 'completed';

        return {
          ...task,
          status: updatedStatus,
        };
      }

      return task;
    });

    await storage.setItem(StorageKeys.Tasks, updatedTasks);
  }

  async function deleteTaskById(taskId: string) {
    const tasks = await storage.getItem<TaskProps[]>(StorageKeys.Tasks);

    const updatedTasks = tasks!.filter(task => task.id !== taskId);

    await storage.setItem(StorageKeys.Tasks, updatedTasks);
  }

  return {
    getTaskById,
    listTasks,
    createTask,
    completeTask,
    deleteTaskById,
  };
}
