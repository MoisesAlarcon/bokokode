import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className='product'>
         <div className='product__title-button-add'>
            <h1>Samurai King Resting</h1>
            <div className='button-add'>
              <div className='button'>
                 <h2>ADD TO CART</h2>
              </div>
            </div>
         </div>
         <div className='product__image'>
          <div className='photo-of-day'>
            <h3>Photo of the day</h3>
          </div>
         </div>
         <div className='product__details'>
            <div className='details'>
              <h2>About the Samurai King Resting</h2>
              <h3>Pets</h3>
              <h4>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 
                  <br></br><br></br>
                  text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</h4>
            </div>
            <div className='also-buy'>
              <h2>People also buy</h2>
              <div className='also-buy__images'>
                <div className='also-buy__images-1'></div>
                <div className='also-buy__images-2'></div>
                <div className='also-buy__images-3'></div>
              </div>
              <div className='also-buy__details'>
                <h2>Details</h2>
                <h4>Size: 1020 x 1020 pixel</h4>
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default Product;