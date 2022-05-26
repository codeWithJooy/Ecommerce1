import React from 'react'

const CategoryUnit=({title,price,img})=>{
   return(
    
        <div className="category_unit">
            <img src={img} />
            <div className="img_like">
                <img src="docs/img/heart.png" />
            </div>
            <div className="category_unit_name">
                <p className="cat_title">{title}</p>
                <p className="cat_price">{price}</p>
            </div>   
        </div>
    
   )
}

export default CategoryUnit;