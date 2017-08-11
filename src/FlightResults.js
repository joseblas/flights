import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardingPass from './BoardingPass';
import './css/flight-results.css';

class FlightResults extends Component {
 
  getBoardingPasses() {
    
    let { flights } = this.props.flights.data;

    // console.log("FlightsResults: ", flights)
    
     if ( flights === undefined || flights.length === 0 ) {
      return (
        <div className="boarding-pass">
          <p>No flights available</p>
        </div>
      );
    }

    flights.sort((a, b) => (a[0][0].summary.price.value + a[1][0].summary.price.value) - ( b[0][0].summary.price.value+ b[1][0].summary.price.value) );
    
   
  
    //send results to akka
    if( flights.length> 2){
    flights.slice(0, 2)
    .map((flight, index) => (
      console.log("flight[0]", flight[1][0])
    ))

flights.slice(0, 2)
    .map((flight, index) => (
      console.log("flight[0]", flight[0][0])
    ))

    }

     

    return flights.map((flight, index) => (
      <BoardingPass
        key={ index }
        currency={ flight[0][0].summary.price.currencySymbol }
        price1={ flight[0][0].summary.price.value }
        price2 = {flight[1][0].summary.price.value}
        dateFrom1={ flight[0][0].outbound.departureDate }
        dateTo1={ flight[0][0].outbound.arrivalDate }
        dateFrom2={ flight[1][0].outbound.departureDate }
        dateTo2={ flight[1][0].outbound.arrivalDate }
        to={ flight[0][0].outbound.arrivalAirport.name }
        from={ flight[0][0].outbound.departureAirport.name }
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
