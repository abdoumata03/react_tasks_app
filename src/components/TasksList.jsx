import TaskItem from "./TaskItem"


const TasksList = ({tasks, deleteTask, toggleTask, focusModify, setTaskHook, setCurrentTask}) => {



  return (
    <ul className="flex flex-col">
       {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
        key={task.id}
        task= {task}
        deleteTask = {deleteTask}
        toggleTask = {toggleTask}
        focusModify = {focusModify}
        setTaskHook= {setTaskHook}
        setCurrentTask = {setCurrentTask}
        />
       ))}
    </ul>
  )
}

export default TasksList