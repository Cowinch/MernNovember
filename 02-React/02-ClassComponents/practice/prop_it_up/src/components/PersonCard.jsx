import React, { useState } from 'react'

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    const [ageCount, setAgeCount] = useState({
        userAge: age
    })

    const birthday = (e) => {
        console.log('btn pushed')
        setAgeCount({
            userAge: ageCount.userAge + 1
        })
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {ageCount.userAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthday}>Happy birthday!</button>
        </div>
    )
}

export default PersonCard