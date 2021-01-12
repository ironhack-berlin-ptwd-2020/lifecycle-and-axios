import React from 'react';

class ProductRow extends React.Component {

  // props.theProduct  

  state = {
    updated: false
  }

  // if price gets updated (not same anymore after update) --> 
  componentDidUpdate(prevProps) {

    if (prevProps.price !== this.props.price) {

      this.setState({
        updated: true
      })
    }
  }

  render() {

    return (
      <div style={{ backgroundColor: this.state.updated ? 'yellow' : 'white' }}>
        <h2>{this.props.name} -- {this.props.price}</h2>
      </div>
    );
  }
}

export default ProductRow;
