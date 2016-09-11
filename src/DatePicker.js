import React, { Component } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import './css/pikaday-theme.css';

class DatePicker extends Component {

  componentDidMount() {
    new Pikaday({
      field: this.refs.datePicker,
      format: 'DD/MM/YYYY',
      onSelect: (date) => {
        this.props.onSelect(date)
      }
    });
  }

  render() {
    return (
      <input ref="datePicker" type="text" className="standard-input" placeholder={ this.props.placeholder } />
    );
  }

}

export default DatePicker;
