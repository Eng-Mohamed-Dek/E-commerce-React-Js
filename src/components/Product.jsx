import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = ({id, image, name, new_price, old_price}) => {
  const { AddtoCart } = useContext(ShopContext)

  return (
    <div className='item'>
        <Link to={`/product/${id}`}><img src={image} alt="" /></Link>
        <p>{name}</p>
        <div className="item-prices">
           <div className="item-price-new">{new_price}</div>
           <div className="item-price-old">{old_price}</div>
        </div>
        <button onClick={() => AddtoCart(id)}>Add To Cart</button>
    </div>
  )
}

export default Product