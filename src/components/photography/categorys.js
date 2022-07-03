import React, { useState } from 'react';

import ShopProducts from '../dataProducts';

const Categorys = () => {
  const[data,setData]=useState(ShopProducts);
  const setFilter=(cat)=>{
    const updatedList=data.filter((x)=>x.category === cat);
    filterResult(updatedList);
}
    return (
      <div className='categorys-prices'>
         <div className='categorys bb'>
            <h2>Category</h2>            
            <div className='category'>
              <button type={'checkbox'} onClick={()=>setFilter('all')}></button>
              <h3>People</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'} onClick={()=>setFilter('people')} ></input>
              <h3>Premium</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>Pets</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>Food</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>Landmarks</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>Cities</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>Nature</h3>
            </div>
         </div>


         <div className='categorys'>
            <h2>Price range</h2>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>Lower than $20</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>$20 - $100</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>$100 - $200</h3>
            </div>
            <div className='category'>
              <input type={'checkbox'}></input>
              <h3>More than $200</h3>
            </div>
         </div>
      </div>
    );
  }

export default Categorys;