import React from 'react'
import CategoryUnit from '../Components/Category/CategoryUnit'
import Header from '../Components/Header'

const Category=()=>{
    return(
       <div className="main">
           <div className="container">
                <Header title="Shirt"
                   hamburger="docs/img/left-chevron.png"/>
                <div className="category_container">
                    <CategoryUnit title="Denim T-Shirt(V-Neck)"
                                  price="Rs 600"
                                  img="docs/img/shirt1.jpg"/>
                    <CategoryUnit title="Denim T-Shirt(V-Neck)"
                                  price="Rs 600"
                                  img="docs/img/shirt2.jpg"/>
                    <CategoryUnit title="Denim T-Shirt(V-Neck)"
                                  price="Rs 600"
                                  img="docs/img/shirt3.jpg"/>
                    <CategoryUnit title="Denim T-Shirt(V-Neck)"
                                  price="Rs 600"
                                  img="docs/img/shirt4.jpg"/>                            
                </div>
               

           </div>
       </div>
    )
}

export default Category;
