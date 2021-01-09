import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {

  return (
    <div>
      <h1>ProductTable</h1>
      {props.productsArr.map(product => {
        return <ProductRow theProduct={product}></ProductRow>
      })}
    </div>
  );
}

export default ProductTable;
