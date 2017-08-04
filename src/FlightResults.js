import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardingPass from './BoardingPass';
import './css/flight-results.css';

class FlightResults extends Component {
 
  getBoardingPasses() {
    
    let { flights } = this.props.flights.data;

    console.log("FlightsResults: ", flights)
    
    
    flights.sort((a, b) => a.summary.price.value - b.summary.price.value);
    
    if (flights.length === 0) {
      return (
        <div className="boarding-pass">
          <p>No flights available</p>
        </div>
      );
    }
  
    // flights.pop()// Why?

     

    return flights.map((flight, index) => (
      <BoardingPass
        key={ index }
        currency={ flight.summary.price.currencySymbol }
        price={ flight.summary.price.value }
        dateFrom={ flight.outbound.departureDate }
        dateTo={ flight.outbound.arrivalDate }
        to={ flight.outbound.arrivalAirport.name }
        from={ flight.outbound.departureAirport.name }
      />
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
