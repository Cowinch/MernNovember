import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log("ERROR RIPPERONI " + err))

        return () => {

        }
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <div className='product-list-container'>
                {
                    products.map((product, i) => {
                        return (
                            <ul key={product._id}>
                                <p><Link to={`/${product._id}`}>{product.title}</Link></p>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList