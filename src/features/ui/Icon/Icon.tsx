import { ReactNode } from "react";
import { IconContext } from "react-icons";
import s from "./Icon.module.scss";

interface Props {
  icon: ReactNode;
  color: string;
}

const Icon = ({ color, icon }: Props) => {
  return (
    <div className={s.icon} style={{ background: color }}>
      <IconContext.Provider value={{ size: "16px" }}>
        {icon}
      </IconContext.Provider>
    </div>
  );
};
export default Icon;
