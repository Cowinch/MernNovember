import React from 'react'

const BoxContainer = (props) => {
    return (
        <div>
            <div className="container">
                {
                    props.boxes.map((box, i) => {
                        return <div 
                                    key={i} 
                                    className="box" 
                                    style={{ 
                                        backgroundColor: box.color, 
                                        width: `${box.width}px`, 
                                        height: `${box.height}px` }}
                                >
                                    <p>{box.text}</p>
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default BoxContainer