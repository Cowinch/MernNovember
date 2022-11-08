import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const [products, setProducts] = useState([])

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res => {
                setProducts(products.filter(product => product._id !== productId))
            })
            .catch( err => console.log("ERROR RIPPERONI " + err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log("ERROR RIPPERONI " + err))

        return () => {

        }
    }, [products])

    return (
        <div>
            <h1>Products</h1>
            <div className='product-list-container'>
                {
                    products.map((product, i) => {
                        return (
                            <ul key={product._id} className="one-product">
                                <p><Link className='link' to={`/${product._id}`}>{product.title}</Link></p>
                                <div className='options'>
                                    <p><Link className='link'>Edit</Link></p>
                                    <p>|</p>
                                    <p className='link' onClick={(e) => handleDelete(product._id)}>Delete</p>
                                </div>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList