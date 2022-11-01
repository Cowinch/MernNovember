import React, { useState } from 'react'

const TodoForm = () => {
    const [todo, setTodo] = useState([
        {
            title: "Dishes",
            isChecked: false
        },
        {
            title: "Gym",
            isChecked: true
        }
    ])
    const [newTodo, setNewTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newTodo.length === 0) return

        setTodo([...todo,
        {
            title: newTodo,
            isChecked: false
        }
        ])
        setNewTodo('')
    }

    const handleDelete = (deleto) => {
        const filteredTodo = todo.filter((_todo, i) => {
            return i !== deleto
        })

        setTodo(filteredTodo)
    }

    const handleCheck = (index) => {
        const updatedTodo = todo.map((oneTodo, i) => {
            if (index === i) {
                oneTodo.isChecked = !oneTodo.isChecked
            } 
            return oneTodo
        })

        setTodo(updatedTodo)

    }

    return (
        <div className='wrap'>

            {/* Input form */}
            <form onSubmit={(e) => handleSubmit(e)} id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} id="myInput" placeholder="Title..." value={newTodo} />
                <button className="addBtn">Add</button>
            </form>

            {/* List */}
            <ul id="myUL">
                {todo.map((todo, i) =>
                    <li className='listed' key={i}>
                        <div className='flex'>
                            <p 
                                className=''
                                style={{textDecoration: todo.isChecked ? "line-through" : "none"}}
                            >
                                {todo.title}
                            </p>
                            <input type="checkbox" onChange={(e) => handleCheck(i)} checked={todo.isChecked} />
                        </div>

                        {/* Delete button */}
                        <button onClick={(e) => handleDelete(i)}>Delete</button>

                    </li>
                )}
            </ul>

        </div>
    )
}

export default TodoForm