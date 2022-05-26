import React from 'react'
import Header from '../Components/Header'
import DisplayImage from '../Components/ItemDisplay/DisplayImage'
const ItemDisplay=()=>{
   return(
        <div className="main">
            <div className="container">
                <Header hamburger="docs/img/left-chevron.png"/>
                <DisplayImage />
                <div className="item_name">
                    <p>Denim TShirt with V-Color</p>
                </div>
                <div className="item_price">
                     <p>Rs 2500</p>
                </div>
                <div className="item_size">
                    <div className="item_unit_title">
                        <p>Select Size</p>
                    </div>
                    <div className="size_unit">
                        <p>S</p>
                    </div>
                    <div className="size_unit">
                        <p>M</p>
                    </div>
                    <div className="size_unit">
                        <p>L</p>
                    </div>
                    <div className="size_unit">
                        <p>XL</p>
                    </div>
                    <div className="size_unit">
                        <p>XXL</p>
                    </div>
                </div>
                <div className="item_description">
                    <span>
                        Description of the product on Sale.It talks about the product and how useful is it for you.
                    </span>
                </div>
                <div className="cart_button">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
   )
}

export default ItemDisplay;