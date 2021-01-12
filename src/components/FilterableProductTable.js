import React from 'react';

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

import axios from 'axios'

import spinner from '../fidgetspinner.gif'

class FilterableProductTable extends React.Component {

  state = {
    products: [],
    loading: true,
    searchTerm: "",
    onStockBool: false
  }

  // gets called after this component first time added to DOM
  // most common use-case : fetch needed data from Backend
  componentDidMount() {
    axios.get('http://localhost:3001/products').then((resp) => {
      console.log("resp.data")
      console.log(resp.data)
      this.setState({
        products: resp.data,
        loading: false
      })
    })
    console.log('FilterableProductTable has been added to DOM')
  }

  // gets called when props or state changes (after DOM has been updated)
  componentDidUpdate() {

  }

  // gets called right before component gets removed from the DOM
  componentWillUnmount() {

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

  updateProductPrice = () => {

    let productsCopy = [...this.state.products]
    productsCopy[1].price = "$1234.12"

    this.setState({
      products: productsCopy
    })
  }

  render() {

    console.log("RENDER HAPPENS")

    let filteredProducts = this.state.products.filter(c => c.name.includes(this.state.searchTerm))

    if (this.state.onStockBool) {
      filteredProducts = filteredProducts.filter(product => product.stocked === true)
    }

    // console.log(myProducts.data)
    return (
      <div>
        <h1>product catalogue</h1>
        {this.state.loading && <img src={spinner} />}
        <SearchBar searchChange={this.searchChangeHandler} onStockChange={this.onStockChangeHandler} searchTerm={this.state.searchTerm}></SearchBar>
        <ProductTable productsArr={filteredProducts}></ProductTable>
        <button onClick={this.updateProductPrice}>Update some price on some product</button>
      </div>
    )
  }
}

export default FilterableProductTable;