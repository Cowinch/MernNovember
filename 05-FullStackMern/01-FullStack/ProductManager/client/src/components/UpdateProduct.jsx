import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const UpdateProduct = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/update/${productId}`, product)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log("ERROR RIPPERONI " + err))
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
        <div className='form-container'>
            <form className='form-box' onSubmit={handleSubmit}>
                <h1>Update {product.title}</h1>

                {/* Title */}
                <div className='input-box'>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={product.title}
                        onChange={e => setProduct({ ...product, title: e.target.value })}
                    />
                </div>

                {/* Price */}
                <div className='input-box'>
                    <label>Price: </label>
                    <input
                        type="number"
                        value={product.price}
                        onChange={e => setProduct({ ...product, price: e.target.value })}
                    />
                </div>

                {/* Description */}
                <div className='input-box'>
                    <label>Description: </label>
                    <input
                        type="text"
                        value={product.description}
                        onChange={e => setProduct({ ...product, description: e.target.value })}
                    />
                </div>
                <div className='options'>
                    <button>Update</button>
                    <Link to="/" className=''>Go Back Home</Link>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct