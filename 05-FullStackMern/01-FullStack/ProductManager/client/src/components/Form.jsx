import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Form = () => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log("ERROR RIPPERONI " + err))
        setProduct({
            title: "",
            price: 0,
            description: ""
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={(e) => handleSubmit(e)} className="form-box">
                <h1>Product Manager</h1>

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
                <button>Create</button>
            </form>
        </div>
    )
}

export default Form