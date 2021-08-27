import React, { useState } from 'react'

const TodoForm = () => {
    const [input, setInput] = useState('');

    return (
        <form className="todo-form">
            <input 
                type="text"
                placeholder="Add a ToDo"
                value={input}
                name="text"
                className="todo-input"
            />
            <button className="todo-button">Add a ToDo</button>
        </form>
    )
}

export default TodoForm
