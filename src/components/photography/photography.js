import React, { Component } from 'react';

import Title from './title';
import CategorysProducts from './categorysPhotos';
import Pagination from './pagination';

class Photography extends Component {
  render() {
    return (
      <div className='photography'>
        <Title></Title>
        <CategorysProducts></CategorysProducts>
        <Pagination></Pagination>
      </div>
    );
  }
}

export default Photography;