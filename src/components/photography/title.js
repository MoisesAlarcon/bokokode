import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
        <div className='title'>
            <div className='title__sections'>
                <h1>Photography / </h1>
                <h2>Premium Photos</h2>
            </div>
            <div className='title__sort-price'>
                <h3>Sort By</h3>
                <h4>Price</h4>
            </div>
       </div>
    );
  }
}

export default Title;