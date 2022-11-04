import React from 'react'

const Superhero = (props) => {
    return (
        <div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Hero Name</th>
                            <th>Full Name</th>
                            <th>Publisher</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                props.superheroes.map((hero, i) => {
                                    return (
                                        <tr key={i}>
                                            <td><img src={hero.images.xs} alt={hero.name} /></td>
                                            <td>{hero.name}</td>
                                            <td>{hero.biography.fullName==0 ? "N/A" : hero.biography.fullName}</td>
                                            {/* <td>{hero.biography.fullName}</td> */}
                                            <td>{hero.biography.publisher}</td>
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

export default Superhero