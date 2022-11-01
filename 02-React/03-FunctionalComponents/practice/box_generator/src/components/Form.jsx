import React, { useState } from 'react'

const Form = (props) => {
    const [newBox, setNewBox] = useState(
        {
            color: "",
            text: ""
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBoxColor(newBox)
        setNewBox(
            {
                color: "",
                text: ""
            }
        )
    }

    return (
        <div className='outer-form-box'>
            <form onSubmit={handleSubmit}>
                <h1>Boxes</h1>
                    <div className='form-box'>
                        <label>Give another box a valid color</label>
                        <input 
                            type="text" 
                            onChange={(e) => setNewBox({ ...newBox, color: e.target.value })} 
                            value={newBox.color} 
                        />
                    </div>
                <div className='form-box'>
                    <label>Give it some text</label>
                    <input 
                        type="text" 
                        onChange={(e) => setNewBox({ ...newBox, text: e.target.value })} 
                        value={newBox.text} 
                    />
                </div>
                <button>Add a box</button>
            </form>
        </div>
    )
}

export default Form