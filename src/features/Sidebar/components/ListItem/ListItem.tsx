import { Link } from "react-router-dom";
import { Icon } from "../../../ui";
import { FaListUl } from "react-icons/fa";
import s from "./ListItem.module.scss";
import { List } from "../../../../store";

interface Props {
  list: List;
}

const ListItem = ({ list }: Props) => {
  return (
    <Link to={`/tasks/${list.id}`} className={s.listItem}>
      <div className={s.left}>
        <Icon icon={<FaListUl />} color={list.color} />
        <h3>{list.name}</h3>
      </div>
      <span>{list.tasks.length}</span>
    </Link>
  );
};
export default ListItem;
