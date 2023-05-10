import { ReactNode } from "react";
import Icon from "../Icon/Icon";
import s from "./Card.module.scss";

interface Props {
  title: string;
  icon: ReactNode;
  count?: number;
  color: string;
}

const Card = ({ title, icon, count = 12, color }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.upper}>
        <Icon color={color} icon={icon} />
        <span className={s.count}>{count}</span>
      </div>
      <h3 className={s.title}>{title}</h3>
    </div>
  );
};
export default Card;
