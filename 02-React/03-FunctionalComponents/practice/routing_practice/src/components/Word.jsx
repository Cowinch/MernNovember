import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
const Word = () => {
    const [type, setType] = useState("word")
    const { word, wordColor, bgColor } = useParams()
    useEffect(() => {
        isNaN(+word) ? setType("word") : setType("number")

    }, [])

    return (
        <div>
            <h1 style={{ color: wordColor, backgroundColor: bgColor }}>The {type} is: {word}</h1>
        </div>
    )
}

export default Word