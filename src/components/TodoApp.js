import React, { useState } from 'react'

export default function TodoApp() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Take out the trash',
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

    return (
        <div>
            <h1>TodoApp Component</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <p>{todo.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
