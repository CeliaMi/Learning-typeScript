import { Todo } from "../App"

interface TodoItemProps{
    todo: Todo;
    toggleTodo: (selectedTodo: Todo) => void;
    removeTodo: (selectedTodo: Todo) => void;
}

const TodoItem = ({todo, toggleTodo, removeTodo}: TodoItemProps) => {
  return (
    <article key={todo.text}>
            <label htmlFor="todo">
              <input 
              type="checkbox"
               checked={todo.complete} 
               id="todo"
               onChange={() => toggleTodo(todo)}
               />
              {todo.text}
            </label>
            <button type="button" onClick={() => removeTodo(todo)}
            className= "contrast">Remove</button>

          </article>
  )
}

export default TodoItem