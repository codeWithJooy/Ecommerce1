import React from 'react'

const Header=({title,hamburger})=>{
    return(
        <div className="header">
            <div className="hamburger">
                <img src={hamburger} />
            </div>
            <div className="header_title">
              <p>{title}</p>
            </div>
            <div className="header_extra">
                <img src="docs/img/heart.png" />
            </div>
            <div className="header_extra">
                <img src="docs/img/cart.png" />
            </div>
        </div>
    )
}

export default Header;