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
                      <img src="docs/img/icons/category.png" />
                      <div className="scroll_button_text">
                          <p>Category</p>
                      </div>
                  </div>
                </div>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card active_button">
                      <img src="docs/img/suit1.jpg" />
                      <div className="scroll_button_text">
                          <p>Suits</p>
                      </div>
                  </div>
                </div>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card active_button">
                      <img src="docs/img/potli1.jpg" />
                      <div className="scroll_button_text">
                          <p>Potli</p>
                      </div>
                  </div>
                </div>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card active_button">
                      <img src="docs/img/kurta1.jpg" />
                      <div className="scroll_button_text">
                          <p>Kurtas</p>
                      </div>
                  </div>
                </div>
                <div className="scroll_button_unit">
                  <div className="scroll_button_card active_button">
                      <img src="docs/img/shirt1.jpg" />
                      <div className="scroll_button_text">
                          <p>Shirts</p>
                      </div>
                  </div>
                </div>
                
                
                

            </Slider>
        </div>
    )
}

export default ScrollButtons;