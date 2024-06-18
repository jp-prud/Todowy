import { StorageKeys, TaskProps, UpdateTaskDTO } from '@types';

import { storage } from '../StorageService/storage';

export function TaskService() {
  async function getTaskById(taskId: string): Promise<TaskProps> {
    const tasksList = await storage.getItem<TaskProps[]>(StorageKeys.Tasks);

    const task = tasksList!.find(_task => _task.id === taskId);

    return task!;
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

  async function updateTask(taskId: string, updateTaskDTO: UpdateTaskDTO) {
    const tasks = await storage.getItem<TaskProps[]>(StorageKeys.Tasks);

    const updatedTasks = tasks!.map(_task => {
      if (_task.id === taskId) {
        const updatedTask = {
          ..._task,
          ...updateTaskDTO,
        };

        console.log(updatedTask);

        return updatedTask;
      }

      return _task;
    });

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

    return storage.setItem(StorageKeys.Tasks, updatedTasks);
  }

  return {
    getTaskById,
    listTasks,
    createTask,
    completeTask,
    deleteTaskById,
    updateTask,
  };
}
