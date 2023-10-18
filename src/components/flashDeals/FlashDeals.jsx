import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"
import { NavLink } from 'react-router-dom';

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='ffree-heading text-center '>
            <h1 style={{fontSize: '35px'}}>Featured Freelancers</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />

          <div className='view_all text-center' >
            <NavLink to={`/products/`} class="btn btn-outline-primary">See more</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default FlashDeals
