import React, { useState } from "react";

import ShopProducts from "../dataProducts";




export default function(props) {

    const { category, price, image } = props.item;
    const [data,setData]=useState(ShopProducts);
  return (
    <div className='photo-information'>
             <div className="photo">
              <img src={image.src} ></img>
              
             </div>
             <div className='information'>
                 <h4>{category}</h4>
                 <h2>API TITLE</h2>
                 <h3>${price}</h3>
             </div> 
                      
    </div>
  );
}
