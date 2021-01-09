import React from 'react';

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

import myProducts from '../data.json'

class FilterableProductTable extends React.Component {

  state = {
    searchTerm: "",
    onStockBool: false
  }

  searchChangeHandler = (theNewSearchTerm) => {
    this.setState({
      searchTerm: theNewSearchTerm
    })
  }

  onStockChangeHandler = (newOnStockBool) => {
    this.setState({
      onStockBool: newOnStockBool
    })
  }

  render() {

    let filteredProducts = myProducts.data.filter(c => c.name.includes(this.state.searchTerm))

    // this could be cleaner
    let moreFilteredProducts
    if (this.state.onStockBool) {
      moreFilteredProducts = filteredProducts.filter(product => product.stocked === true)
    } else {
      moreFilteredProducts = filteredProducts
    }


    // console.log(myProducts.data)
    return (
      <div>
        <h1>product catalogue</h1>
        <SearchBar searchChange={this.searchChangeHandler} onStockChange={this.onStockChangeHandler} searchTerm={this.state.searchTerm}></SearchBar>
        <ProductTable productsArr={moreFilteredProducts}></ProductTable>
      </div>
    )
  }
}

export default FilterableProductTable;