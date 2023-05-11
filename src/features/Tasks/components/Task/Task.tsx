import { useRef } from "react";
import { Task as TaskModel } from "../../Task.model";

import s from "./Task.module.scss";

interface Props {
  task: TaskModel;
  handleTaskCompletion: (id: string) => void;
  handleTaskTextChange: (id: string, newText: string) => void;
}

const Task = ({ task, handleTaskCompletion, handleTaskTextChange }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleOnBlur = () => {
    if (ref.current && ref.current.value !== task.text) {
      handleTaskTextChange(task.id, ref.current.value);
    }
  };

  return (
    <div className={s.task}>
      <button
        className={task.isCompleted ? s.completed : ""}
        onClick={() => handleTaskCompletion(task.id)}
      >
        <div className={s.inner}></div>
      </button>

      <input
        type="text"
        ref={ref}
        onBlur={handleOnBlur}
        defaultValue={task.text}
      />
    </div>
  );
};
export default Task;
