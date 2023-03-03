import React from "react";
import { useState } from "react";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({ name: task, checked: false, id: Date.now()});
    setTask("");
  };

  return (
    <form
      className="w-full flex flex-col md:flex-row justify-center items-center mb-8"
      onSubmit={handleFormSubmit}
    >
      
      <input
        type="text"
        id="task-input"
        placeholder="What is your next task?"
        value={task}
        onInput={(e) => setTask(e.target.value)}
        required
        autoFocus
        maxLength={60}
        className="font-poppins rounded-lg w-full text-gray-900 placeholder-gray-400 p-3 focus:outline-none"
      />
      <button className="w-full md:w-1/3 p-3 bg-secondary rounded-lg mt-2 md:mt-0 md:ml-3 text-white whitespace-nowrap overflow-hidden text-ellipsis">
        Add Task
      </button>
    </form>
  );
};

export default CustomForm;
