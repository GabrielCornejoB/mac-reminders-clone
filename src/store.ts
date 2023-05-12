import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./features/Tasks/Task.model";

export interface List {
  tasks: Task[];
  id: string;
  name: string;
  color: string;
}
interface ListsStore {
  lists: List[];
  createList: (name: string, color: string) => void;
  // updateList: (listId: string, newName: string) => void;
  // deleteList: (listId: string) => void;
  createTask: (listId: string) => void;
  toggleTaskCompletion: (listId: string, taskId: string) => void;
  updateTask: (listId: string, taskId: string, newText: string) => void;
  deleteTask: (listId: string, taskId: string) => void;
}

const initialList: List = {
  tasks: [],
  id: uuidv4(),
  name: "Reminders",
  color: "#ff9500",
};
const useListsStore = create<ListsStore>((set) => ({
  lists: [initialList],
  createList: (name: string, color: string) =>
    set((store) => ({
      lists: [...store.lists, { name, color, tasks: [], id: uuidv4() }],
    })),
  createTask: (listId: string) =>
    set((store) => ({
      lists: store.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: [
                ...list.tasks,
                { id: uuidv4(), isCompleted: false, text: "" },
              ],
            }
          : list
      ),
    })),
  toggleTaskCompletion: (listId: string, taskId: string) =>
    set((store) => ({
      lists: store.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, isCompleted: !task.isCompleted }
                  : task
              ),
            }
          : list
      ),
    })),
  updateTask: (listId: string, taskId: string, newText: string) =>
    set((store) => ({
      lists: store.lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId ? { ...task, text: newText } : task
              ),
            }
          : list
      ),
    })),
  deleteTask: (listId: string, taskId: string) =>
    set((store) => ({
      lists: store.lists.map((list) =>
        list.id === listId
          ? { ...list, tasks: list.tasks.filter((task) => task.id !== taskId) }
          : list
      ),
    })),
}));

export default useListsStore;
