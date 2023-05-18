import { ReactNode } from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.scss";
import { Icon } from "@features/ui";

interface Props {
  title: string;
  icon: ReactNode;
  counter: number;
  color: string;
  linkTo: string;
}

const Card = ({ title, counter, icon, color, linkTo }: Props) => {
  return (
    <Link to={linkTo} className={s.card}>
      <div className={s.upper}>
        <Icon color={color} icon={icon} />
        <span className={s.count}>{counter}</span>
      </div>
      <h3 className={s.title}>{title}</h3>
    </Link>
  );
};
export default Card;
