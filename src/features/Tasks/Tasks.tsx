import { IconContext } from "react-icons";
import { GoPlus } from "react-icons/go";
import { MdIosShare } from "react-icons/md";

import s from "./Tasks.module.scss";

const Tasks = () => {
  return (
    <main className={s.main}>
      <header className={s.header}>
        <div className={s.headerButtons}>
          <IconContext.Provider value={{ size: "25px" }}>
            <MdIosShare className={s.icon} />
            <GoPlus className={s.icon} />
          </IconContext.Provider>
        </div>
        <div className={s.headerTitle}>
          <h1 className={s.title}>Reminders</h1>
          <h1 className={s.count}>4</h1>
        </div>
      </header>
      <ul></ul>
    </main>
  );
};
export default Tasks;
