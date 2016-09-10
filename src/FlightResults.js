import React, { Component } from 'react';
import BoardingPass from './BoardingPass';
import './css/flight-results.css';

class FlightResults extends Component {

  getBoardingPasses() {

    const state = this.props.store.getState();

    let { flights } = state.flights.data;
    flights.sort((a, b) => a.price - b.price );

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

    const { flights } = this.props.store.getState();

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

export default FlightResults;
