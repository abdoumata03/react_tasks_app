import React from "react";

const TaskItem = ({ task }) => {
  return <div className="w-full bg-white rounded-lg p-3 mb-2 text-gray-900">{task.name}</div>;
};

export default TaskItem;
