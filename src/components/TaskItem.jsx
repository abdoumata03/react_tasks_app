import React, { useState } from "react";

const TaskItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="w-full flex items-center bg-white rounded-lg p-3 mb-2 text-gray-900">
      <input
        type="checkbox"
        className="w-4 h-4 rounded mr-2"
        name={task.name}
        id={task.id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={task.id} className={isChecked? `line-through`:`no-underline`}>{task.name}</label>
    </div>
  );
};

export default TaskItem;
