import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./features/Tasks/Task.model";

interface TasksStore {
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  updateTaskText: (id: string, newText: string) => void;
  createTask: () => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [
    {
      isCompleted: false,
      text: "Comprar una camisa para el evento",
      id: uuidv4(),
    },
  ],
  toggleTaskCompletion: (id: string) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),
  updateTaskText: (id: string, newText: string) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      ),
    })),
  createTask: () =>
    set((store) => ({
      tasks: [...store.tasks, { id: uuidv4(), isCompleted: false, text: "" }],
    })),
}));

export default useTasksStore;
