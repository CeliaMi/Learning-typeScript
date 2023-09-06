import {useState} from 'react'
import FormAdd from './components/FormAdd'
import Todos from './components/Todos'

export interface Todo{
  text: string,
  complete: boolean
}

const initialTodos: Todo[] = [
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

  const toggleTodo = (selectedTodo: Todo) => {  
    setTodos(prevTodos => {
      return prevTodos.map(todo =>{
        if(todo === selectedTodo) {
          return{
            ...todo,
            complete: !todo.complete
  
          }
        }
        return todo;
      })
    });
  }

  const removeTodo = (selectedTodo: Todo) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo !== selectedTodo);
    })
  }
  
  return (
    <div className="container">
      <p>To do</p>
      <FormAdd addTodo={addTodo}/>
      <div>
      <Todos
      todos={todos}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
      />
      </div>
    </div>
  )
}

export default App