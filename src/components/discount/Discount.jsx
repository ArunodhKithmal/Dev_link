import React from "react"
import Dcard from "./Dcard"
import { NavLink } from 'react-router-dom';

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='fcus-heading text-center'>
            <div className='fcus'>
              <h2>Featured Customers</h2>
            </div>
          </div>
          <Dcard />
          <div className='view_all text-center' >
            <NavLink to={`/products/`} class="btn btn-outline-primary">View all Customers</NavLink>
          </div>
        </div>

      </section>
    </>
  )
}

export default Discount
