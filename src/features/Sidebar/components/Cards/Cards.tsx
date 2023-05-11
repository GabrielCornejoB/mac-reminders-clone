import useTasksStore from "../../../../store";
import { Card } from "../Card";
import { FaCheck, FaInbox } from "react-icons/fa";
import s from "./Cards.module.scss";

const Cards = () => {
  const { tasks } = useTasksStore();

  return (
    <section className={s.cards}>
      <Card
        counter={tasks.length}
        title="All tasks"
        color="#3f3f3f"
        icon={<FaInbox />}
      />
      <Card
        counter={tasks.filter((t) => t.isCompleted).length}
        title="Completed"
        color="#586771"
        icon={<FaCheck />}
      />
    </section>
  );
};
export default Cards;
