import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface todosProps{
    todos: Todo[],
    toggleTodo: (selectedTodo: Todo) => void;
    removeTodo : (selectedTodo: Todo) => void;
}
const Todos = ({todos, toggleTodo, removeTodo}:todosProps) => {
  return (
    <>
       {todos.map((todo)=>(
          <TodoItem 
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          />
        ))}
    </>
  )
}

export default Todos