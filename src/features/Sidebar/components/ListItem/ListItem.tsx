import { ReactNode } from "react";
import Icon from "../../../ui/Icon/Icon";
import s from "./ListItem.module.scss";

interface Props {
  icon: ReactNode;
  color: string;
  title: string;
}

const ListItem = ({ icon, color, title }: Props) => {
  return (
    <div className={s.listItem}>
      <div className={s.left}>
        <Icon icon={icon} color={color} />
        <h3>{title}</h3>
      </div>
      <span>4</span>
    </div>
  );
};
export default ListItem;
