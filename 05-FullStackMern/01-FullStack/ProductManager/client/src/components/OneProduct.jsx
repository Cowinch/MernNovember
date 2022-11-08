import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const OneProduct = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                setProduct(res.data.product)
            })
            .catch(err => console.log("ERROR RIPPERONI " + err))

        return () => {

        }
    }, [])

    return (
        <div style={{marginTop: "50px"}}>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <h3>{product.description}</h3>
            <h3><Link to="/">Home</Link></h3>
        </div>
    )
}

export default OneProduct