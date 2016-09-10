import React, { Component } from 'react';

class SubmitButton extends Component {

  render() {
    return (
      <button className="standard-button" disabled={ this.props.disabled } onClick={ this.props.onClick }>
        { this.props.value }
      </button>
    );

  }

}

export default SubmitButton;
