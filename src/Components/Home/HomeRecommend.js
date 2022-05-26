import React from 'react'

const HomeRecommend=()=>{
  return(
    <div className="homeRecommend">
    <div className="recommendHeader">
      <p>Most Popular</p>
    </div>
    <div className="reco_unit">
      
      <div className="reco_image">
        <img src="docs/img/shirt1.jpg" />
      </div>
      
      <div className="reco_des">
        <div class="reco_title">
          <p>Title For Shirt</p>
        </div>
        <div className="reco_description">
           <p>Short description describing the shirt.ffgrdddddddddddd
             ddddddddddddddddddddddddddddddd
             ddddddddddddddddddddddddddddddddd
           </p>
        </div>
        <div className="reco_meta">
          <div className="reco_price">
              Rs 450
          </div>
          <div class="reco_view">
             view
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeRecommend;