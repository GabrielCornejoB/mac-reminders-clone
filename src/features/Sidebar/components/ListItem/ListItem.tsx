import { List } from "@stores/ListsStore";
import { useTasksStore } from "@stores/TasksStore";

import { Link } from "react-router-dom";
import { Icon } from "../../../ui";
import { FaListUl } from "react-icons/fa";
import s from "./ListItem.module.scss";

interface Props {
  list: List;
}

const ListItem = ({ list }: Props) => {
  const tasks = useTasksStore((s) => s.getFilteredTasks(list.id));

  return (
    <Link to={`/mac-reminders-clone/tasks/${list.id}`} className={s.listItem}>
      <div className={s.left}>
        <Icon icon={<FaListUl />} color={list.color} />
        <h3>{list.name}</h3>
      </div>
      <span>{tasks.length}</span>
    </Link>
  );
};
export default ListItem;
