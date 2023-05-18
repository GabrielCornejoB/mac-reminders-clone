import { create } from "zustand";
import { v4 as uuid } from "uuid";

export interface List {
  id: string;
  name: string;
  color: string;
}

interface ListsStore {
  lists: List[];
  getList: (id: string) => List | undefined;
  createList: (name: string, color: string) => void;
}

const initialList = {
  id: uuid(),
  name: "Reminders",
  color: "#ff9500",
};

export const useListsStore = create<ListsStore>((set, get) => ({
  lists: [initialList],
  getList: (id: string) => {
    const { lists } = get();
    return lists.find((list) => list.id === id);
  },
  createList: (name: string, color: string) =>
    set((store) => ({
      lists: [...store.lists, { id: uuid(), name, color }],
    })),
}));
