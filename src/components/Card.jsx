import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Card = (pro) => {
  return (
    <div>
        <div class="card" style={{width: "18rem"}}>
  <img src={pro.image}/>
  <div class="card-body">
    <h5 class="card-title">{pro.name}</h5>
    <p class="card-text">{pro.description}</p>
    <p className="card-text">{pro.price}</p>
    <div className='mb-3 d-flex justify-content-between mx-5'>
    <FaStar /> <FaStar /> <FaStar /><FaStar /><FaStar />
    </div>
<a href="#" class="btn btn-primary w-100"><FaShoppingCart /> Add to Cart</a>

  </div>
</div>
    </div>
  )
}

export default Card