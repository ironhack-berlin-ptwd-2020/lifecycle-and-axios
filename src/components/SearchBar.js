import React from 'react';


let SearchBar = (props) => {

  let searchHandler = (event) => {
    // "lifting the state up"
    props.searchChange(event.currentTarget.value)
  }

  let checkboxHandler = (event) => {
    // will be 'true' or 'false'
    props.onStockChange(event.currentTarget.checked)
  }

  //props.onStockChange

  return (
    <div>
      <input type="text" name="" id="" placeholder="Search ..." onChange={searchHandler} value={props.searchTerm} />
      <input type="checkbox" name="" id="" onChange={checkboxHandler} />
    </div>
  )

}

export default SearchBar;