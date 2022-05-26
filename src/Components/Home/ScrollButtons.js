import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ScrollButtons=()=>{
    const setting={
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1
    }
    return(
        <div className="scroll_buttons">
            <Slider {...setting}>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card active_button">
                      <p>All</p>
                  </div>
                </div>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card">
                      <p>Saree</p>
                  </div>
                </div>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card">
                      <p>Salwar</p>
                  </div>
                </div>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card">
                      <p>Dress</p>
                  </div>
                </div>

            </Slider>
        </div>
    )
}

export default ScrollButtons;