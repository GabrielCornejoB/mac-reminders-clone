import { ReactNode } from "react";
import { Icon } from "../../../ui";
import s from "./Card.module.scss";

interface Props {
  title: string;
  icon: ReactNode;
  counter: number;
  color: string;
}

const Card = ({ title, counter, icon, color }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.upper}>
        <Icon color={color} icon={icon} />
        <span className={s.count}>{counter}</span>
      </div>
      <h3 className={s.title}>{title}</h3>
    </div>
  );
};
export default Card;
