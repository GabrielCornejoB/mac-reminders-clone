import { ReactNode } from "react";
import { Icon } from "../../../ui";
import s from "./ListItem.module.scss";

interface Props {
  icon: ReactNode;
  color: string;
  title: string;
  counter: number;
}

const ListItem = ({ icon, color, title, counter }: Props) => {
  return (
    <div className={s.listItem}>
      <div className={s.left}>
        <Icon icon={icon} color={color} />
        <h3>{title}</h3>
      </div>
      <span>{counter}</span>
    </div>
  );
};
export default ListItem;
