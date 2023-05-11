import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./features/Tasks/Task.model";

interface TasksStore {
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  createTask: () => void;
  updateTaskText: (id: string, newText: string) => void;
  deleteTask: (id: string) => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  toggleTaskCompletion: (id: string) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),

  createTask: () =>
    set((store) => ({
      tasks: [...store.tasks, { id: uuidv4(), isCompleted: false, text: "" }],
    })),

  updateTaskText: (id: string, newText: string) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      ),
    })),

  deleteTask: (id: string) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTasksStore;
