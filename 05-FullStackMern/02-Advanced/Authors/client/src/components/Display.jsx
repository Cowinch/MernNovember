import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Display = () => {
    const [authors, setAuthors] = useState([])


    const handleDelete = (e, authorId) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/users/${authorId}`, authorId)
            .then(res => {

            })
            .catch(err => console.log("ERROR RIPPERONI " + err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                setAuthors(res.data.users)
            })
            .catch(err => console.log("ERROR RIPPERONI " + err))
    }, [authors])

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by: </h3>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i) => {
                            return (
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td className='options'>
                                        <Link to={`/edit/${author._id}`} className='option'>Edit</Link> 
                                        <p> | </p>
                                        <span 
                                            onClick={(e) => handleDelete(e, author._id)} 
                                            className='option'
                                        >
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display