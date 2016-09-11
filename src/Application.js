import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import FlightPicker from './FlightPicker';
import FlightResults from './FlightResults';

class Application extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_BOOKING_DATA'
    });
  }

  render() {
    return (
      <div className="application">
        <Header />
        <FlightPicker />
        <FlightResults />
      </div>
    );
  }
}

export default connect()(Application);
