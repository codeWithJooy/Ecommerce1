import React from 'react'

const Footer=()=>{
  return(
      <div className="footer">
          <div className="footer_container">
              <div className="footer_unit">
                  <img src="docs/img/icons/home.png" />
                  <div class="footer_unit_text">
                      <p>Home</p>
                  </div>
              </div>
              <div className="footer_unit">
                  <img src="docs/img/icons/category_light.png" />
                  <div class="footer_unit_text">
                      <p>Category</p>
                  </div>
              </div>
              <div className="footer_unit">
                  <img src="docs/img/icons/bag_light.png" />
                  <div class="footer_unit_text">
                      <p>My Orders</p>
                  </div>
              </div>
              <div className="footer_unit">
                  <img src="docs/img/icons/user_light.png" />
                  <div class="footer_unit_text">
                      <p>Profile</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Footer;