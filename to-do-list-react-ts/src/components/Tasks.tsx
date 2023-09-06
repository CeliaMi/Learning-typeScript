import { Task } from "../App";
import TodoItem from "./TaskItem";

interface tasksProps{
    taks: Task[],
    toggleTask: (selectedTodo: Task) => void;
    removeTask : (selectedTodo: Task) => void;
}
const Task = ({taks, toggleTask, removeTask}:tasksProps) => {
  return (
    <>
       {taks.map((task)=>(
          <TodoItem 
          key={task.text}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
          />
        ))}
    </>
  )
}

export default Task