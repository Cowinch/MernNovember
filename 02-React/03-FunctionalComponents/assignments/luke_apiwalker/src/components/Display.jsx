import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const Display = (props) => {
    const { type, id } = useParams()
    const [starWars, setStarWars] = useState(null)
    const [homeWorld, setHomeWorld] = useState(null)
    const [starships, setStarships] = useState([])
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        setNotFound(false)
        setStarships([])
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((response) => {
                setStarWars(response.data)
                return response.data


            })
            .then((data) => {
                if (data.homeworld) {
                    axios.get(data.homeworld)
                        .then((homeWorldResponse) => {
                            setHomeWorld(homeWorldResponse.data)
                        })
                        .catch((err) => {
                            console.log("Homeworld Error" + err)
                            setNotFound(true)
                        })
                }
            }

            )
            .catch((err) => {
                console.log("General Error" + err)
                setNotFound(true)
            })

    }, [id, type])

    useEffect(() => {
        async function getShips() {
            for (let i = 0; i < starWars?.starships?.length; i++) {
                let starShipResponse = await axios.get(starWars?.starships[i])
                setStarships((previousState) => [...previousState, starShipResponse.data])
            }
        }
        getShips()
    }, [starWars])

    return (
        <div className='outer-display'>
            <div className='display-box'>
                {
                    notFound ? (
                        <div>
                            <h2 className='four-o-four'>404. These are not the droids are you looking for</h2>
                            <img
                                src="https://i.kym-cdn.com/entries/icons/mobile/000/018/682/obi-wan.jpg"
                                alt="obiwan"
                            />
                        </div>
                    ) : (starWars ? (
                        <div>
                            <h2>Name: {starWars.name}</h2>

                            {/* People */}
                            {starWars.height ? <p>Height: {starWars.height}cm</p> : ''}
                            {starWars.mass ? <p>Mass: {starWars.mass}kg</p> : ''}
                            {starWars.hair_color ? <p>Hair color: {starWars.hair_color}</p> : ''}
                            {starWars.homeworld ? <p>Homeworld:
                                <Link to={`${starWars.homeworld.split('/api')[1]}`}>
                                    {homeWorld?.name}
                                </Link></p> : ''}
                            {starWars.starships ? <h2>Ships: </h2> : ''}
                            {
                                starWars?.starships ? ((
                                    starships.map((ship, i) => {
                                        return (
                                            <ul key={i}>
                                                <p>
                                                    <Link to={`${starWars?.starships[i]?.split('/api')[1]}`}>
                                                        {ship.name}
                                                    </Link>
                                                </p>
                                            </ul>
                                        )
                                    })
                                ))
                                    : ''
                            }

                            {/* Planets */}
                            {starWars.climate ? <p>Climate: {starWars.climate}</p> : ''}
                            {starWars.terrain ? <p>Terrain: {starWars.terrain}</p> : ''}
                            {starWars.surface_water ? <p>Surface water: {starWars.surface_water}</p> : ''}
                            {starWars.population ? <p>Population: {starWars.population}</p> : ''}
                            

                            {/* Starships */}
                            {starWars.model ? <p>Model: {starWars.model}</p> : ''}
                            {starWars.manufacturer ? <p>Manufacturer: {starWars.manufacturer}</p> : ''}
                            {starWars.hyperdrive_rating ?
                                <p>Hyperdrive rating: {starWars.hyperdrive_rating}</p>
                                : ''}
                            {starWars.length ? <p>Length: {starWars.length}m</p> : ''}
                            {starWars.cargo_capacity ?
                                <p>Cargo capacity: {starWars.cargo_capacity} m<sup>2</sup></p>
                                : ''}
                            {starWars.cost_in_credits ? <p>Cost: {starWars.cost_in_credits} credits</p> : ''}
                        </div>

                    ) : <p>Loading...</p>)
                }
            </div>
        </div>
    )
}

export default Display