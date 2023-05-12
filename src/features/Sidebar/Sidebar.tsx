import { useRef } from "react";
import useListsStore from "../../store";

import { toast } from "sonner";
import { Cards } from "./components/Cards";
import { ListItem } from "./components/ListItem";

import { IconContext } from "react-icons";
import { FaListUl } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const { lists, createList } = useListsStore();
  const ref = useRef<HTMLInputElement>(null);

  const handleListCreation = () => {
    if (ref.current && ref.current.value && ref.current.value.trim().length) {
      createList(ref.current.value, "#ff9500");
      toast(`List '${ref.current.value}' created succesfully`);
      ref.current.value = "";
    } else toast.error("Invalid list name");
  };

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
        <input
          ref={ref}
          type="text"
          className={s.listNameInput}
          placeholder="New list name"
        />
        <button className={s.createButton} onClick={handleListCreation}>
          <IconContext.Provider value={{ size: "24px" }}>
            <AiOutlinePlusCircle />
          </IconContext.Provider>
          <span>Create list</span>
        </button>
      </section>
    </aside>
  );
};
export default Sidebar;
