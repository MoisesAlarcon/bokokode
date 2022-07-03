import React, { Component } from 'react';
import Header from './header';
import Product from './product/product';
import Photography from './photography/photography';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header></Header>
        <Product></Product>
        <Photography></Photography>

      </div>
    );
  }
}
