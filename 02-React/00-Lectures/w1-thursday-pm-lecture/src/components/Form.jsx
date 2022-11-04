import React from 'react'

const Form = (props) => {
    const createUser = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={(e) => createUser(e)}>
            <input type="text" />
            <button>Push to start</button>
            </form>
        </div>
    )
}

export default Form