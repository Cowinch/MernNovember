import React from 'react'

const Display = (props) => {
    return (
        <div>
            <p>All the animals!</p>
            {
                props.animals.map((element, i) => {
                    return <li key={i}>{element}</li>
                })
            }
        </div>
    )
}

export default Display