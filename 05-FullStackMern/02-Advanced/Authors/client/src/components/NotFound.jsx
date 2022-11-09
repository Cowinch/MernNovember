import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div>
            <h3>We're sorry, but we could not find the author you are looking for.<br/> Would you like to add this author to our database?</h3>
            <div>
                <Link to="/new">Add an author</Link>
            </div>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}

export default NotFound