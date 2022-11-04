import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Hero = (props) => {

    const { heroId } = useParams()
    const [hero, setHero] = useState(null)

    useEffect(() => {
        console.log(heroId)
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
            .then((response) => {
                setHero(response.data)
            })
            .catch(err => console.log("Error " + err))
    }, [heroId])
    return (
        <div>
            <h3>Hero id is {hero?.id}</h3>

            {
                hero ? (

                    <div>
                        {/* {JSON.stringify(hero)} */}
                        <h2>{hero?.name}</h2>
                        <img src={hero?.images.md} alt={hero?.name} />
                    </div>
                ) : <p>Loading...</p>
            }


        </div>
    )
}

export default Hero