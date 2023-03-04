import TaskItem from "./TaskItem"

const TasksList = ({tasks, deleteTask, toggleTask}) => {



  return (
    <ul className="flex flex-col">
       {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
        key={task.id}
        task= {task}
        deleteTask = {deleteTask}
        toggleTask = {toggleTask}
        />
       ))}
    </ul>
  )
}

export default TasksList