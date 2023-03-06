import { useState, useRef } from "react";
import CustomForm from "./components/CustomForm";
import TasksList from "./components/TasksList";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const [taskOnModify, setTaskOnModify] = useState([]);

  const [isModifying, setIsModifying] = useState(false);


  const ref = useRef(null);

  const AddTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const handleClick = () => {
    ref.current?.focus();
    setIsModifying(prevState => true)
  };

  const updateTask = (task, new_name) => {
  setTasks((prevState) =>
  prevState.map((t) => (t.id === task.id ? { ...t, name: new_name } : t))
  );
  };

  return (
    <div className="bg-primary h-screen overflow-hidden flex flex-col justify-start items-center">
      <div className="w-2/5 flex flex-col mt-32">
        <CustomForm
          addTask={AddTask}
          taskHook={task}
          refe={ref}
          setTaskHook={setTask}
          isModifyingTask = {isModifying}
          updateTaskOnModify = {updateTask}
          setIsModifyingTask = {setIsModifying}
          currentTask = {taskOnModify}
        />
        {tasks && (
          <TasksList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            focusModify={handleClick}
            setTaskHook={setTask}
            setCurrentTask={setTaskOnModify}
          />
        )}
      </div>
    </div>
  );
}

export default App;
