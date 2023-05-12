import useListsStore from "../../store";

import { toast } from "sonner";
import Task from "./components/Task/Task";

import { IconContext } from "react-icons";
import { GoPlus } from "react-icons/go";
import { BiTrash } from "react-icons/bi";
import s from "./Tasks.module.scss";

const Tasks = () => {
  const listId = "123";
  const { lists: data, createTask } = useListsStore();
  const list = data.find((list) => list.id === listId);

  const handleTaskCreation = () => {
    if (list?.tasks.every((task) => task.text)) {
      createTask(listId);
    } else {
      toast.error("You must first give a text to the empty To-do");
    }
  };

  return (
    <main className={s.main}>
      <header className={s.header}>
        <div className={s.headerButtons}>
          <IconContext.Provider value={{ size: "25px" }}>
            <BiTrash className={s.icon} />
            <GoPlus className={s.icon} onClick={handleTaskCreation} />
          </IconContext.Provider>
        </div>
        <div className={s.headerTitle} style={{ color: list?.color }}>
          <h1 className={s.title}>Reminders</h1>
          <h1 className={s.count}>{list?.tasks.length}</h1>
        </div>
      </header>
      <ul>
        {list?.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
};
export default Tasks;
