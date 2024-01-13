import React from 'react'
import "./Product.css";



const Product = (props) => {
  return (
    <div className='container'>
     
      <div className='product-image'>
       <img src={props.image} alt="" />
      </div>

      <div className='product-info'>
        <h3 className='price'>
        ₹ {props.price}
        </h3>
        <p className='desc'>
          {props.desc}
        </p>
        </div>
        <p className='loc-date'>
        <span className='locate'>{props.locate}</span>
        <span className='date'>{props.date}</span>
        </p>
        
      </div>
    
  )
}

export default Product