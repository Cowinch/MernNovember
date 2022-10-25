import React, {useState} from 'react'

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    let userAge=age
    
    const birthday = (e) => {
        console.log('btn pushed')
        userAge++
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {userAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthday}>Happy birthday!</button>
        </div>
    )
}

export default PersonCard