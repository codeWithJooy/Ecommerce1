import React from 'react'

const CartUnit=()=>{
  return(
      <div className="cart_unit">
          <div className="cart_unit_img">
              <img src="docs/img/kurta1.jpg" />
          </div>
          <div className="cart_unit_details">
              <div className="cart_unit_title">
                <p>Traditional Kurta</p>
              </div>
              <div className="size_unit">
                 <p>S</p>
              </div>
   
              <div className="cart_unit_quantity">
                <div className="cart_quantity_handle">
                   <p>+</p>
                </div>
                <div className="cart_quantity_holder">
                  <p>1</p>
                </div>
                <div className="cart_quantity_handle">
                   <p>-</p>
                </div>
              </div>

              <div className="cart_unit_rate">
                 <p>Rs 600</p>
              </div>
              
          </div>
      </div>
  )
}

export default CartUnit;