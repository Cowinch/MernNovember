import React from 'react'

const Pokemon = (props) => {
    return (
        <div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Pokemon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.pokemon.map((one_pokemon, i) => {
                                return (
                                    <tr key={i}>
                                        {/* <td><img src={one_pokemon.url} alt={one_pokemon.name} /></td> */}
                                        <td>{one_pokemon.name}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Pokemon