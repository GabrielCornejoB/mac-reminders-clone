import Card from "../Card/Card";
import { FaCheck, FaInbox } from "react-icons/fa";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <section className={s.windowButtons}>O O O</section>
      <section className={s.cards}>
        <Card title="All tasks" color="blue" icon={<FaInbox />} />
        <Card title="Completed" color="gray" icon={<FaCheck />} />
      </section>
      <ul className={s.lists}>Lists</ul>
    </aside>
  );
};
export default Sidebar;
