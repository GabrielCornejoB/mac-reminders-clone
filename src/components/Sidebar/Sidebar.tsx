import Card from "../Card/Card";
import ListItem from "../ListItem/ListItem";

import { IconContext } from "react-icons";
import { FaCheck, FaInbox, FaListUl } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

import s from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <section className={s.upper}>
        <section className={s.windowButtons}>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section className={s.cards}>
          <Card title="All tasks" color="#3f3f3f" icon={<FaInbox />} />
          <Card title="Completed" color="#586771" icon={<FaCheck />} />
        </section>
        <section className={s.lists}>
          <h4>My Lists</h4>
          <ul>
            <li>
              <ListItem icon={<FaListUl />} color="#ff9500" title="To Do" />
            </li>
          </ul>
        </section>
      </section>
      <section className={s.lower}>
        <IconContext.Provider value={{ size: "24px" }}>
          <AiOutlinePlusCircle />
        </IconContext.Provider>
        <span>Create list</span>
      </section>
    </aside>
  );
};
export default Sidebar;
