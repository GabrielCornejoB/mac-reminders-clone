import useTasksStore from "../../store";

import Task from "./components/Task/Task";

import { IconContext } from "react-icons";
import { GoPlus } from "react-icons/go";
import { ImInfo } from "react-icons/im";
import s from "./Tasks.module.scss";

const Tasks = () => {
  const { tasks, createTask, color } = useTasksStore();

  return (
    <main className={s.main}>
      <header className={s.header}>
        <div className={s.headerButtons}>
          <IconContext.Provider value={{ size: "25px" }}>
            <ImInfo className={s.icon} />
            <GoPlus className={s.icon} onClick={createTask} />
          </IconContext.Provider>
        </div>
        <div className={s.headerTitle} style={{ color: color }}>
          <h1 className={s.title}>Reminders</h1>
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
