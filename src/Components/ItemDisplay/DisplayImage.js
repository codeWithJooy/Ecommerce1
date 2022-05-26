import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const DisplayImage=()=>{
    const setting={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }

    return(
         <div className="display_section">
             <Slider {...setting}>
                 <div className="display_unit">
                     <div className="display_card">
                         <img src="docs/img/shirt1.jpg" />
                     </div>
                 </div>
                 <div className="display_unit">
                     <div className="display_card">
                         <img src="docs/img/shirt2.jpg" />
                     </div>
                 </div>
                 <div className="display_unit">
                     <div className="display_card">
                         <img src="docs/img/shirt3.jpg" />
                     </div>
                 </div>
             </Slider>
         </div>
    )
}

export default DisplayImage;