import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeScroll=()=>{
    const setting={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }

  return(
      <div className="homescroll">
        <Slider {...setting} >
            <div className="homescroll_unit">
                <div className="scroll_card">
                    <img src="docs/img/suit1.jpg" />
                </div>
            </div>
            <div className="homescroll_unit">
                <div className="scroll_card">
                    <img src="docs/img/potli1.jpg" />
                </div>
            </div>
            <div className="homescroll_unit">
                <div className="scroll_card">
                    <img src="docs/img/display1.jpg" />
                </div>
            </div>
            <div className="homescroll_unit">
                <div className="scroll_card">
                    <img src="docs/img/display2.jpg" />
                </div>
            </div>
        </Slider>
        
      </div>
  )
}

export default HomeScroll;