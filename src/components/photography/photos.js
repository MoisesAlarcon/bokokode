import React, { Component } from 'react';
import axios from 'axios';

import PhotoItem from './photoItem';


class Photos extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getApiItems() {

    axios.post('https://technical-frontend-api.bokokode.com/api/products')
  .then(response => {
    this.setState({
      data: response.data.data.data
    });
    // handle success
    console.log("respose data", response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });
  }

  apiItems() {
    return this.state.data.map(item => {
      return <PhotoItem key={item._id} item={item}/>;
    });
  }

  componentDidMount() {
    this.getApiItems();
  }

  render() {
    return (
      <div className='photos'>
         {this.apiItems()}
      </div>
    );
  }
}

export default Photos;