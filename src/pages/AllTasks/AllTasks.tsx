import { useListsStore } from "@stores/ListsStore";
import { Task } from "../../features";
import s from "./AllTasks.module.scss";
import { useTasksStore } from "@stores/TasksStore";

const AllTasks = () => {
  const lists = useListsStore((s) => s.lists);
  const getFilteredTasks = useTasksStore((s) => s.getFilteredTasks);
  const tasks = useTasksStore((s) => s.tasks);

  return (
    <main className={s.main}>
      <header className={s.header}>
        <h1 className={s.title}>All Tasks</h1>
        <h1>{tasks.length}</h1>
      </header>
      <ul className={s.lists}>
        {lists.map((list) => (
          <li key={list.id} className={s.list}>
            <h2 className={s.subtitle} style={{ color: list.color }}>
              {list.name}
            </h2>
            <ul>
              {getFilteredTasks(list.id).map((task) => (
                <li key={task.id}>
                  <Task task={task} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default AllTasks;
