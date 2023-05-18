import { create } from "zustand";
import { v4 as uuid } from "uuid";

export interface ITask {
  id: string;
  isCompleted: boolean;
  text: string;
  listId: string;
}

interface TasksStore {
  tasks: ITask[];
  getFilteredTasks: (listId: string) => ITask[];
  createTask: (listId: string) => void;
  updateTaskText: (id: string, newText: string) => void;
  updateTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const useTasksStore = create<TasksStore>((set, get) => ({
  tasks: [],
  getFilteredTasks: (listId: string) => {
    const { tasks } = get();
    return tasks.filter((task) => task.listId === listId);
  },
  createTask: (listId: string) =>
    set((store) => ({
      tasks: [
        ...store.tasks,
        { text: "", listId, id: uuid(), isCompleted: false },
      ],
    })),
  updateTaskText: (id: string, newText: string) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      ),
    })),
  updateTaskCompletion: (id: string) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),
  deleteTask: (id: string) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),
}));
