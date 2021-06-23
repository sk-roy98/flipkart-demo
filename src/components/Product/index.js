import React from 'react'
import "./product.css"
import Card from "../Card"
const Product = ({products}) => {
// console.log(products)
    return (
        <div className="displaySection">
          {products?.map((item)=>(
              <Card key={item.id} image={item.image} brand={item.brand} size={item.size} title={item.title} price={item.price}/>
          ))}
        </div>
    )
}

export default Product
