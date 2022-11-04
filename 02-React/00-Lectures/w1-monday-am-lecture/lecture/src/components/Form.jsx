import React, { useState } from 'react'
import PeopleDisplay from './PeopleDisplay'
const Form = (props) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)


    const createUserForm = (e) => {
        e.preventDefault()
        const newUser = {
            name: name,
            age: age
        }
        props.addToState(newUser)
        setName('')
        setAge(0)

    }
    return (
        <div>

            <div>
                <form onSubmit={createUserForm}>
                    <div>
                        <label>Name</label>
                        {/* value is set to the very variable were changing. this is so when we push submit, we can setName and setAge to default and itll reset our inputs */}
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" onChange={(e) => setAge(e.target.value)} value={age} />
                    </div>
                    <button>click</button>
                </form>
            </div>
        </div>
    )
}

export default Form