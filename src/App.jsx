import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const AddTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="bg-primary h-screen overflow-hidden flex flex-col justify-start items-center">
      <div className="w-2/5 flex flex-col mt-32">
        <CustomForm addTask={AddTask} />
        {tasks && <TasksList tasks={tasks} />}
      </div>
    </div>
  );
}

export default App;
