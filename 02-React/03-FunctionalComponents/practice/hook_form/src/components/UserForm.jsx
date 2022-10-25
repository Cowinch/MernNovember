import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div className=''>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h1>Your Form data</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default UserForm;
