import React, { Component } from 'react';

class Months extends Component {

  // componentDidMount() {
    // new Input({
    //   onSelect: (text) => {
        // this.props.onSelect(text)
    //   }
    // });
  // }

  render() {
    return (
      <input type="text" className="standard-input" onChange={this.props.onChange} placeholder={ this.props.placeholder } />
    );
  }

}

export default Months;
