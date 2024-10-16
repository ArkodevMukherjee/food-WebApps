import React from 'react'
import "./Card.css";
import burgerImage from "../src/assets/burger-image.avif";

const Card = ({foodName}) => {
  return (
    <div className="card">
    <img src={burgerImage} alt="" width={"285px"} height={"200px"}/>
    <h4>{foodName?foodName:"Burger"}</h4>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, autem!</p>
    <button className='item-button'>Buy Now</button>
    <button className='item-button'>Add to Cart</button>
    </div>
  )
}

export default Card