import React from 'react'
import Header from '../Components/Header'
import HomeRecommend from '../Components/Home/HomeRecommend'
import HomeScroll from '../Components/Home/HomeScroll'
import ScrollButtons from '../Components/Home/ScrollButtons'
import ScrollImage from '../Components/Home/ScrollImage'
import Sidebar from '../Components/Sidebar'
const Home= () =>{
    return(
        <div className="main">
          <div className="container">
             <Header title="Abhishek Hazra"
                     hamburger="docs/img/icons/user_light.png"/>
             {/* <Sidebar />        */}
             <HomeScroll />
             <ScrollButtons />
             <ScrollImage />
             <HomeRecommend />

          </div>
        </div>
    )
}

export default Home;