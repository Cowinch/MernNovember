import React, {useState,} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = (props) => {
    const [heroNum, setHeroNum] = useState(1)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/hero/" + heroNum)
        setHeroNum(1)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" onChange={e => setHeroNum(e.target.value)} value={heroNum} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form