import {useState, ChangeEvent} from 'react'

interface PropsAddTask {
addTask: (text: string) => void;
}

const FormAdd = ({addTask}: PropsAddTask) => {
        const [text, setText] = useState('');

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value)
        }

        const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            //validaciones eliminando espacios
            const trimmedText = text.trim();
            if(!trimmedText) return
            addTask(trimmedText)
            setText("");
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">
               New Task👇
            <input 
                type="text"
                id="task"
                placeholder='Ingrese tarea'
                value={text}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
  )
}

export default FormAdd