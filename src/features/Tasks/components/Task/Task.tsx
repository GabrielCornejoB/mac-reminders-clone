import { useRef } from "react";
// import { useParams } from "react-router-dom";
import { ITask, useTasksStore } from "@stores/TasksStore";

import { toast } from "sonner";
import s from "./Task.module.scss";

interface Props {
  task: ITask;
}

const Task = ({ task }: Props) => {
  const { updateTaskCompletion, updateTaskText, deleteTask } = useTasksStore();
  const ref = useRef<HTMLInputElement>(null);

  const handleOnBlur = () => {
    if (ref.current && ref.current.value !== task.text) {
      updateTaskText(task.id, ref.current.value);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Delete") {
      deleteTask(task.id);
      toast("Task has been deleted succesfully");
    }
  };
  return (
    <div className={s.task}>
      <button
        className={task.isCompleted ? s.completed : ""}
        onClick={() => updateTaskCompletion(task.id)}
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
