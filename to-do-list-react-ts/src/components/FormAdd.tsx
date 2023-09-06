import {useState, ChangeEvent} from 'react'

interface PropsAddTodo {
addTodo: (text: string) => void;
}

const FormAdd = ({addTodo}: PropsAddTodo) => {
        const [text, setText] = useState('');

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value)
        }

        const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            //validaciones eliminando espacios
            const trimmedText = text.trim();
            if(!trimmedText) return
            addTodo(trimmedText)
            setText("");
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
                To do
            <input 
                type="text"
                id="todo"
                placeholder='Ingrese tarea'
                value={text}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Add to do</button>
        </form>
  )
}

export default FormAdd