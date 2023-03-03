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
      className=" w-2/5 flex justify-center items-center"
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
      <button className="w-1/3 p-3 bg-secondary rounded-lg ml-3 text-white">
        Add Task
      </button>
    </form>
  );
};

export default CustomForm;
