import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const OneProduct = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res => {
                navigate("/")
            })
            .catch( err => console.log("ERROR RIPPERONI " + err))
    }

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
        <div className='one-product display'>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <h3>{product.description}</h3>
            <div className='options'>
                <button className='edit'><Link className='link' to={`/edit/${product._id}`}>Edit</Link></button>
                <p>|</p>
                <button className='deleto' onClick={(e) => handleDelete(product._id)}>Delete</button>
                <p>|</p>
                <p><Link to="/">Go Back Home</Link></p>
            </div>
        </div>
    )
}

export default OneProduct