import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Form = ({ userName }) => {
    const { authorId } = useParams()
    const navigate = useNavigate()
    const [author, setAuthor] = useState(userName ? userName : {name: ""})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (authorId === undefined) {
            axios.post(`http://localhost:8000/api/users`, author)
                .then(res => {
                    navigate('/')
                })
                .catch(err => { console.log("ERROR RIPPERONI " + err) })
        } else {
            axios.put(`http://localhost:8000/api/users/${authorId}`, author)
                .then(res => {
                    navigate('/')
                })
                .catch(err => console.log("ERROR RIPPERONI " + err))
        }
    }
    useEffect(() => {
      if(authorId !== undefined){
        console.log(authorId)
        axios.get(`http://localhost:8000/api/users/${authorId}`)
            .then(res => {
                if(res.data.user===null) navigate("/404")
                setAuthor(res.data.user)
            })
            .catch(err => {
                console.log("ERROR RIPPERONI " + err)
            })
      }
    }, [])
    
    return (
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={author?.name} 
                        onChange={e => setAuthor({name: e.target.value})}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form