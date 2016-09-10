import React, { Component } from 'react';
import './css/boarding-pass.css';

class BoardingPass extends Component {

  render() {
    return (
      <div className="boarding-pass">
        { this.props.currency } { this.props.price.toFixed(2) }
      </div>
    );
  }

}

export default BoardingPass;
