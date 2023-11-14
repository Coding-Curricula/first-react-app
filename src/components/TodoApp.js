import React, { useState } from 'react'

export default function TodoApp() {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Do my homework',
            isComplete: false
        },
        {
            id: 2,
            text: 'Sweep the floor',
            isComplete: false
        },
        {
            id: 3,
            text: 'Wash the dishes',
            isComplete: false
        }
    ])

    const addTodo = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text: newTodo,
                isComplete: false
            }
        ])
        setNewTodo('')
    }

    const toggleTodo = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    console.log(todos)

    return (
        <div>
            <h1>TodoApp Component</h1>
            <form onSubmit={addTodo}>
                <input
                    type='text'
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder='Add Todo'

                />
                <button type='submit'>Add Todo</button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <input
                            type='checkbox'
                            checked={todo.isComplete}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <button onClick={() => deleteTodo(todo.id)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}