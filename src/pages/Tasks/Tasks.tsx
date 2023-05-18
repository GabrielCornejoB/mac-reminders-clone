import { useParams } from "react-router-dom";
import { ITask, useTasksStore } from "@stores/TasksStore";
import { useListsStore } from "@stores/ListsStore";

import { toast } from "sonner";
import Task from "../../features/Tasks/components/Task/Task";

import { IconContext } from "react-icons";
import { GoPlus } from "react-icons/go";
import { BiTrash } from "react-icons/bi";
import s from "./Tasks.module.scss";

const Tasks = () => {
  const { id } = useParams();
  const { getFilteredTasks, createTask } = useTasksStore();
  const getList = useListsStore((s) => s.getList);

  const tasks: ITask[] = id ? getFilteredTasks(id) : [];
  const list = id && getList(id);

  const handleTaskCreation = () => {
    if (tasks.every((task) => task.text) && id) {
      createTask(id);
    } else {
      toast.error("You must first give a text to the empty To-do");
    }
  };

  if (!list) return <p>List is undefined</p>;
  return (
    <main className={s.main}>
      <header className={s.header}>
        <div className={s.headerButtons}>
          <IconContext.Provider value={{ size: "25px" }}>
            <BiTrash className={s.icon} />
            <GoPlus className={s.icon} onClick={handleTaskCreation} />
          </IconContext.Provider>
        </div>
        <div className={s.headerTitle} style={{ color: "orange" }}>
          <h1 className={s.title}>{list.name}</h1>
          <h1 className={s.count}>{tasks.length}</h1>
        </div>
      </header>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
};
export default Tasks;
