import React, { useState } from 'react'


const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    
    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length==0){
            setUsernameError("")
        }
        else if(e.target.value.length < 1) {
            setUsernameError("Username is required!");
        } else if(e.target.value.length < 3) {
            setUsernameError("Username must be 3 characters or longer!");
        } else {
            setUsernameError("");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length==0){
            setEmailError("")
        }
        else if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length==0){
            setPasswordError("")
        }
        else if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("Password must be 3 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length==0){
            setConfirmPasswordError("")
        }
        else if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password is required!");
        } else if(e.target.value.length < 3) {
            setConfirmPasswordError("Confirm Password must be 3 characters or longer!");
        } else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault()
        if(password!=confirmPassword) {
            setConfirmPasswordError("Passwords must match!")
            setPasswordError("Passwords must match!")
        } else {
            const newUser = { username, email, password }
            console.log("Welcome", newUser)
            setHasBeenSubmitted(true)
        }
    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!"
        } else {
            return "Welcome, please submit the form"
        }
    }

    return (
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div>
                <label>Username: </label>
                <input type="text" onChange={handleUsername} />
                { usernameError ? <p style={{color:'red'}}>{ usernameError }</p> : '' }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} />
                { emailError ? <p style={{color:'red'}}>{ emailError }</p> : '' }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword} />
                { passwordError ? <p style={{color:'red'}}>{ passwordError }</p> : '' }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={handleConfirmPassword} />
                { confirmPasswordError ? <p style={{color:'red'}}>{ confirmPasswordError }</p> : '' }
            </div>
            <input type="submit" value="Create User" />
        </form>
    )
}

export default UserForm
