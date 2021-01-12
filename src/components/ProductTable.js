import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {

  return (
    <div>
      <h1>ProductTable</h1>
      {props.productsArr.map((product, index) => {
        return <ProductRow key={index} price={product.price} name={product.name}></ProductRow>
      })}

    </div>
  );
}

export default ProductTable;
