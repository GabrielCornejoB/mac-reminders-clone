import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa";
import s from "./Task.module.scss";
import { useState } from "react";

const Task = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckConfirmation = () => {
    if (isEditing) setIsEditing(false);
  };

  return (
    <div className={s.task}>
      <button>
        <div className={s.inner}></div>
      </button>
      <input
        type="text"
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
      />
      <IconContext.Provider
        value={{ color: isEditing ? "#ff9500" : "transparent" }}
      >
        <FaCheck className={s.check} onClick={handleCheckConfirmation} />
      </IconContext.Provider>
    </div>
  );
};
export default Task;
