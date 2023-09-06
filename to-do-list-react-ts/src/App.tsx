import {useState} from 'react'
import FormAdd from './components/FormAdd'
import Tasks from './components/Tasks'
import './App.css'

export interface Task{
  text: string,
  complete: boolean
}

const initialTask: Task[] = [
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

  const [ tasks, setTasks ] = useState<Array<Task>>(initialTask);

  const addTask = (text: string) => {
    const newTask = {
      text,
      complete: false, 
    };
    setTasks([...tasks, newTask]);
  }

  const toggleTask = (selectedTask: Task) => {  
    setTasks(prevTask => {
      return prevTask.map(task =>{
        if(task === selectedTask) {
          return{
            ...task,
            complete: !task.complete
  
          }
        }
        return task;
      })
    });
  }

  const removeTask = (selectedTask: Task) =>{
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task !== selectedTask);
    })
  }
  
  return (
    <div className="container">
      <h2 className='title'>Things that I should do...someday🙄</h2>
      <FormAdd addTask={addTask}/>
      <div>
      <Tasks
      taks={tasks}
      toggleTask={toggleTask}
      removeTask={removeTask}
      />
      </div>
    </div>
  )
}

export default App