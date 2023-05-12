import useListsStore from "../../store";

import { Cards } from "./components/Cards";
import { ListItem } from "./components/ListItem";

import { IconContext } from "react-icons";
import { FaListUl } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const { lists } = useListsStore();

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
            {lists.map((list) => (
              <li key={list.id}>
                <ListItem
                  title={list.name}
                  counter={list.tasks.length}
                  color={list.color}
                  icon={<FaListUl />}
                />
              </li>
            ))}
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
