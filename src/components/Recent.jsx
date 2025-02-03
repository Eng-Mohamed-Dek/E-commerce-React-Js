import Titlesection from './Titlesection'
import Product from './Product'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Recent = () => {
  const { all_products } = useContext(ShopContext)

  return (
    <div className="product">
          <Titlesection title="Recent Products"/>
          <hr />
          <div className="product-item">
            {all_products.slice(0,8).map((product) => (
                    <Product id={product.id} image={product.image} old_price={product.old_price} 
                    new_price={product.new_price} name={product.name}
                    />
            ))}
          </div>
    </div>
  )
}

export default Recent