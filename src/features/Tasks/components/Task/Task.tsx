import { useRef } from "react";
import useTasksStore from "../../../../store";
import { useParams } from "react-router-dom";

import { toast } from "sonner";
import { Task as TaskModel } from "../../Task.model";

import s from "./Task.module.scss";

interface Props {
  task: TaskModel;
}

const Task = ({ task }: Props) => {
  const { id } = useParams();

  const { toggleTaskCompletion, updateTask, deleteTask } = useTasksStore();
  const ref = useRef<HTMLInputElement>(null);

  const handleOnBlur = () => {
    if (ref.current && ref.current.value !== task.text) {
      updateTask(id!, task.id, ref.current.value);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Delete") {
      deleteTask(id!, task.id);
      toast("Task has been deleted succesfully");
    }
  };
  return (
    <div className={s.task}>
      <button
        className={task.isCompleted ? s.completed : ""}
        onClick={() => toggleTaskCompletion(id!, task.id)}
      >
        <div className={s.inner}></div>
      </button>
      <input
        type="text"
        ref={ref}
        onBlur={handleOnBlur}
        onKeyDown={(e) => handleKeyDown(e)}
        defaultValue={task.text}
      />
    </div>
  );
};
export default Task;
