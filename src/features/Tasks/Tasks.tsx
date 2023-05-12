import useListsStore from "../../store";
import { useParams } from "react-router-dom";

import { toast } from "sonner";
import Task from "./components/Task/Task";

import { IconContext } from "react-icons";
import { GoPlus } from "react-icons/go";
import { BiTrash } from "react-icons/bi";
import s from "./Tasks.module.scss";

const Tasks = () => {
  const { id } = useParams();
  const { lists: data, createTask } = useListsStore();
  const list = data.find((list) => list.id === id);

  const handleTaskCreation = () => {
    if (list?.tasks.every((task) => task.text)) {
      createTask(id!);
    } else {
      toast.error("You must first give a text to the empty To-do");
    }
  };
  if (list == undefined) return <p>a</p>;
  return (
    <main className={s.main}>
      <header className={s.header}>
        <div className={s.headerButtons}>
          <IconContext.Provider value={{ size: "25px" }}>
            <BiTrash className={s.icon} />
            <GoPlus className={s.icon} onClick={handleTaskCreation} />
          </IconContext.Provider>
        </div>
        <div className={s.headerTitle} style={{ color: list.color }}>
          <h1 className={s.title}>{list.name}</h1>
          <h1 className={s.count}>{list.tasks.length}</h1>
        </div>
      </header>
      <ul>
        {list.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
};
export default Tasks;
