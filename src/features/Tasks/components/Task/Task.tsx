import { useRef } from "react";
import useTasksStore from "../../../../store";
import { useParams } from "react-router-dom";

import { toast } from "sonner";
import { Task as TaskModel } from "../../Task.model";

import s from "./Task.module.scss";

interface Props {
  task: TaskModel;
  listId: string;
}

const Task = ({ task, listId }: Props) => {
  const { toggleTaskCompletion, updateTask, deleteTask } = useTasksStore();
  const ref = useRef<HTMLInputElement>(null);

  const handleOnBlur = () => {
    if (ref.current && ref.current.value !== task.text) {
      updateTask(listId!, task.id, ref.current.value);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Delete") {
      deleteTask(listId!, task.id);
      toast("Task has been deleted succesfully");
    }
  };
  return (
    <div className={s.task} title={task.id}>
      <button
        className={task.isCompleted ? s.completed : ""}
        onClick={() => toggleTaskCompletion(listId!, task.id)}
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
