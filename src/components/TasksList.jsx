import TaskItem from "./TaskItem"

const TasksList = ({tasks}) => {
  return (
    <ul className="flex flex-col">
       {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
        key={task.id}
        task= {task}
        />
       ))}
    </ul>
  )
}

export default TasksList