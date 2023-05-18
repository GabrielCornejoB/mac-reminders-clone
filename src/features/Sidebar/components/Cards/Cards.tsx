import { useTasksStore } from "@stores/TasksStore";

import { Card } from "../Card";

import { FaCheck, FaInbox } from "react-icons/fa";
import s from "./Cards.module.scss";

const Cards = () => {
  const tasks = useTasksStore((s) => s.tasks);

  return (
    <section className={s.cards}>
      <Card
        linkTo="/"
        counter={tasks.length}
        title="All tasks"
        color="#3f3f3f"
        icon={<FaInbox />}
      />
      <Card
        linkTo="/completed"
        counter={tasks.filter((t) => t.isCompleted).length}
        title="Completed"
        color="#586771"
        icon={<FaCheck />}
      />
    </section>
  );
};
export default Cards;
