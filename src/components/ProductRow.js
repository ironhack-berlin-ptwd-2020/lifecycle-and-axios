import React from 'react';

function ProductRow(props) {

  // props.theProduct

  return (
    <div>
      <h2>{props.theProduct.name} -- {props.theProduct.price}</h2>
    </div>
  );
}

export default ProductRow;
