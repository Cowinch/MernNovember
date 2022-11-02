import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Form = (props) => {
    const navigate = useNavigate()
    const [id, setId] = useState(1)
    const [type, setType] = useState("people")
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${type}/${id}`)
        setId(1)
        setType("people")
    }
    return (
        <div>
            <h1 className='star-wars'>star wars api</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                <div>
                    <label>Search for: </label>
                    <select name="type" onChange={(e) => setType(e.target.value)} value={type}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="starships">starships</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input type="number" name="id" onChange={(e) => setId(e.target.value)} value={id} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form