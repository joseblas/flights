import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardingPass from './BoardingPass';
import './css/flight-results.css';

class FlightResults extends Component {

  getBoardingPasses() {

    let { flights } = this.props.flights.data;
    flights.sort((a, b) => a.price - b.price);

    if (flights.length === 0) {
      return (
        <div className="boarding-pass">
          No flights available
        </div>
      );
    }

    return flights.map((flight, index) => (
      <BoardingPass key={ index } currency={ flight.currency } price={ flight.price } />
    ));

  }

  render() {

    const { flights } = this.props;

    if (flights.fetched === false) {
      return null;
    }

    return (
      <div className="flight-results">
        <h2 className="flight-results__heading">Results</h2>
        { this.getBoardingPasses() }
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    flights: state.flights
  }
};

export default connect(mapStateToProps)(FlightResults);
