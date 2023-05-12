import useListsStore from "../../../../store";

import { Card } from "../Card";

import { FaCheck, FaInbox } from "react-icons/fa";
import s from "./Cards.module.scss";

const Cards = () => {
  const { lists } = useListsStore();

  const getTasksLength = () => {
    let counter = 0;
    lists.forEach((list) =>
      list.tasks.forEach(() => {
        counter++;
      })
    );
    return counter;
  };
  const getCompletedTasksLength = () => {
    let counter = 0;
    lists.forEach((list) =>
      list.tasks.forEach((task) => {
        if (task.isCompleted) counter++;
      })
    );
    return counter;
  };

  return (
    <section className={s.cards}>
      <Card
        counter={getTasksLength()}
        title="All tasks"
        color="#3f3f3f"
        icon={<FaInbox />}
      />
      <Card
        counter={getCompletedTasksLength()}
        title="Completed"
        color="#586771"
        icon={<FaCheck />}
      />
    </section>
  );
};
export default Cards;
