import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Display = (props) => {
    const { type, id } = useParams()
    const [starWars, setStarWars] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((response) => {
                setStarWars(response.data)
            })
            .catch(err => console.log("Error" + err))

    }, [id, type])

    return (
        <div className='outer-display'>
            <div className='display-box'>
                {
                    starWars ? (
                        <div>
                            <h2>Name: {starWars.name}</h2>
                            {starWars.height ? <p>Height: {starWars.height}cm</p> : ''}
                            {starWars.mass ? <p>Mass: {starWars.mass}kg</p> : ''}
                            {starWars.hair_color ? <p>Mass: {starWars.hair_color}</p> : ''}
                            {starWars.skin_color ? <p>Mass: {starWars.skin_color}</p> : ''}

                            {starWars.climate ? <p>Climate: {starWars.climate}</p> : ''}
                            {starWars.terrain ? <p>Terrain: {starWars.terrain}</p> : ''}
                            {starWars.surface_water ? <p>Surface Water: {starWars.surface_water}</p> : ''}
                            {starWars.population ? <p>Population: {starWars.population}</p> : ''}

                            {starWars.model ? <p>Model: {starWars.model}</p> : ''}
                            {starWars.manufacturer ? <p>Manufacturer: {starWars.manufacturer}</p> : ''}
                            {starWars.hyperdrive_rating ? <p>Hyperdrive rating: {starWars.hyperdrive_rating}</p> : ''}
                            {starWars.length ? <p>Length: {starWars.length}m</p> : ''}
                            {starWars.cargo_capacity ? <p>Cargo Capacity: {starWars.cargo_capacity} m<sup>2</sup></p> : ''}
                            {starWars.cost_in_credits ? <p>Cost: {starWars.cost_in_credits} credits</p> : ''}
                        </div>

                    ) : <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default Display