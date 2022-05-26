import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollImageCard from './ScrollImageCard';

const ScrollImage=()=>{
    const setting={
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:1.5,
        slidesToScroll:1
    }
    return(
       <div className="scroll_image">
           <Slider {...setting}>
               <ScrollImageCard  image="docs/img/shirt1.jpg"
                                 title="Long Sleeve TShirt"
                                 price="Rs 250"/>
               <ScrollImageCard  image="docs/img/shirt2.jpg" 
                                 title="Long Sleeve TShirt"
                                 price="Rs 250"/>
               <ScrollImageCard  image="docs/img/shirt3.jpg"
                                 title="Long Sleeve TShirt"
                                 price="Rs 250"/>
               <ScrollImageCard  image="docs/img/shirt4.jpg" 
                                 title="Long Sleeve TShirt"
                                 price="Rs 250"/>
           </Slider>
           <div className="view_more">
            <p>View All</p>
        </div>
       </div>
    )
}

export default ScrollImage;