import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const TaskItem = ({
  task,
  deleteTask,
  toggleTask,
  focusModify,
  setTaskHook,
  setCurrentTask
}) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked((prevState) => !prevState);
    toggleTask(task.id);
  };

  return (
    <div className="w-full flex items-center bg-white rounded-lg p-3 mb-2 text-gray-900">
      <input
        type="checkbox"
        className="w-4 h-4 rounded-[2px] mr-2"
        name={task.name}
        id={task.id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className={isChecked ? `line-through` : `no-underline`}>
        {task.name}
      </label>
      <button
        className="ml-auto p-1"
        onClick={() => {
          setTaskHook(task.name);
          focusModify();
          setCurrentTask(task);
        }}
      >
        <PencilIcon className="h-4 w-4" />
      </button>
      <button
        className="p-1 ml-2"
        aria-label={`Delete ${task.name} Task`}
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default TaskItem;
