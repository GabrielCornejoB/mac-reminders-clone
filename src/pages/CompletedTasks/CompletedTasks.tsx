import { useListsStore } from "@stores/ListsStore";
import { useTasksStore } from "@stores/TasksStore";
import { Task } from "@features/Tasks";
import s from "../AllTasks/AllTasks.module.scss";

const CompletedTasks = () => {
  const lists = useListsStore((s) => s.lists);
  const getFilteredTasks = useTasksStore((s) => s.getFilteredTasks);
  const tasks = useTasksStore((s) => s.tasks);

  return (
    <main className={s.main}>
      <header className={s.header}>
        <h1 className={s.title}>Completed Tasks</h1>
        <h1>{tasks.filter((t) => t.isCompleted).length}</h1>
      </header>
      <ul className={s.lists}>
        {lists.map((list) => (
          <li key={list.id} className={s.list}>
            <h2 className={s.subtitle} style={{ color: list.color }}>
              {list.name}
            </h2>
            <ul>
              {getFilteredTasks(list.id)
                .filter((t) => t.isCompleted)
                .map((task) => (
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
export default CompletedTasks;
