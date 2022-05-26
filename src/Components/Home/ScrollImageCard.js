import React from 'react'
import ScrollImage from './ScrollImage'

const ScrollImageCard=({title,price,image})=>{
    return(
        <div className="scroll_image_unit">
            <div className="scroll_image_card">
                    
                <div className="scroll_main_img">
                    <img src={image} />
                </div>
                <div className="like_heart">
                    <img src="docs/img/like.png" />
                </div>
                <div className="scroll_image_data">
                    <h4>{title}</h4>
                    <h5>{price}</h5>
                </div> 
            </div>
        </div>
    )
}

export default ScrollImageCard;