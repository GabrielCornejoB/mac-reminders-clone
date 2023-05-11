import { Cards } from "./components/Cards";
import { ListItem } from "./components/ListItem";

import { IconContext } from "react-icons";
import { FaListUl } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

import s from "./Sidebar.module.scss";
import useTasksStore from "../../store";

const Sidebar = () => {
  const { tasks } = useTasksStore();

  return (
    <aside className={s.sidebar}>
      <section className={s.upper}>
        <section className={s.windowButtons}>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <Cards />
        <section className={s.lists}>
          <h4>My Lists</h4>
          <ul>
            <li>
              <ListItem
                counter={tasks.length}
                icon={<FaListUl />}
                color="#ff9500"
                title="Reminders"
              />
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
