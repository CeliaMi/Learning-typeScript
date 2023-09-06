import {useState} from 'react'
import FormAdd from './components/FormAdd'

interface Todo{
  text: string,
  complete: boolean
}

const initialTodos = [
  {
    text: "Learn React",
    complete: false
  },
  {
    text: "Learn  TypeScript",
    complete: false
  }
]

const App = () => {

  const [ todos, setTodos ] = useState<Array<Todo>>(initialTodos);
  const addTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false, 
    };
    setTodos([...todos, newTodo]);
  }
  
  return (
    <div className="container">
      <p>To do</p>
      <FormAdd addTodo={addTodo}/>
      <div>
        {todos.map((todo)=>(
          <article key={todo.text}>
            <label htmlFor="todo">
              <input type="checkbox" checked={todo.complete} id="todo"/>
              {todo.text}
            </label>

          </article>
        ))}
      </div>
    </div>
  )
}

export default App