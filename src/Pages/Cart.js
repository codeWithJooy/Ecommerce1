import React from 'react'
import CartUnit from '../Components/Cart/CartUnit'
import Header from '../Components/Header'

const Cart=()=>{
  return(
      <div className="main">
          <div className="container">
              <Header title="My Cart" hamburger="docs/img/left-chevron.png" />
              <div className="cart_unit_container">
                  <CartUnit />
                  <CartUnit />
                  <CartUnit />
              </div>
          </div>
      </div>
  )
}

export default Cart;