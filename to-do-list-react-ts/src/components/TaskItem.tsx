import { Task } from "../App"

interface TaskItemProps{
    task: Task;
    toggleTask: (selectedTodo: Task) => void;
    removeTask: (selectedTodo: Task) => void;
}

const TaskItem = ({task, toggleTask, removeTask}: TaskItemProps) => {
  return (
    <article key={task.text}>
            <label htmlFor="task">
              <input 
              type="checkbox"
               checked={task.complete} 
               id="task"
               onChange={() => toggleTask(task)}
               />
              {task.text}
            </label>
            
            <button type="button" 
            onClick={() => removeTask(task)}
            className="contrast"
            >
            Remove
            </button>

    </article>
  )
}

export default TaskItem