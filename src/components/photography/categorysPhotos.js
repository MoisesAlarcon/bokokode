import React, { Component } from 'react';

import Categorys from './categorys';
import Photos from './photos';


class CategorysProducts extends Component {
  render() {
    return (
      <div className='category-products'>
         <Categorys></Categorys>
         <Photos></Photos>
      </div>
    );
  }
}

export default CategorysProducts;