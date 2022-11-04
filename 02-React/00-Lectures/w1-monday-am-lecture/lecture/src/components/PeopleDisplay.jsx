import React from 'react'

const PeopleDisplay = (props) => {
  return (
    <div>
            <fieldset>
                loop over state <br />
                {
                    props.people.map( (person, index) => {
                        return (
                            <ul key={index}>{person.name} | {person.age}</ul>
                        )
                    })
                }
            </fieldset>
    </div>
  )
}

export default PeopleDisplay