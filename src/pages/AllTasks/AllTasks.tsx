import { Task } from "../../features";
import useListsStore from "../../store";
import s from "./AllTasks.module.scss";

const AllTasks = () => {
  const { lists } = useListsStore();

  return (
    <main className={s.main}>
      <header className={s.header}>
        <h1 className={s.title}>All Tasks</h1>
        <h1>count</h1>
      </header>
      <ul className={s.lists}>
        {lists.map((list) => (
          <li key={list.id} className={s.list}>
            <h2 className={s.subtitle} style={{ color: list.color }}>
              {list.name}
            </h2>
            <ul>
              {list.tasks.map((task) => (
                <li key={task.id}>
                  <Task task={task} listId={list.id} />
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
