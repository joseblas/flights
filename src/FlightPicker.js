import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirportSelector from './AirportSelector';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import { fetchFlights } from './actions/flights';
import { updateOrigin, updateDestination, updateFromDate, updateToDate } from './actions/basket';
import './css/flight-picker.css';

class FlightPicker extends Component {

  render() {

    const { basket, booking } = this.props;

    const { origin, destination, fromDate, toDate } = basket;
    const { airports, routes } = booking.data;

    const isDisabled = !(origin && destination && fromDate && toDate);

    return (
      <div className="flight-picker">

        <div className="flight-picker__row">

          <AirportSelector
            type="origin"
            title="From:"
            value={ origin }
            airports={ airports }
            onChange={ this.props.originChanged.bind(this) }
          />

          <AirportSelector
            type="destination"
            title="To:"
            value={ destination }
            airports={ airports }
            origin={ origin }
            routes={ routes }
            onChange={ this.props.destinationChanged.bind(this) }
          />

        </div>

        <div className="flight-picker__row">

          <DatePicker
            placeholder="Fly Out"
            onSelect={ this.props.fromDateChanged.bind(this) }
           />

          <DatePicker
            placeholder="Fly Back"
            onSelect={ this.props.toDateChanged.bind(this) }
          />

        </div>

        <div className="flight-picker__row">

          <SubmitButton
            value="Find Flights"
            disabled={ isDisabled }
            onClick={ this.props.fetchFlights.bind(this) }
          />

        </div>

      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    booking: state.booking
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    originChanged: (event) => {
      const { value } = event.target;
      dispatch(updateOrigin(value));
    },
    destinationChanged: (event) => {
      const { value } = event.target;
      dispatch(updateDestination(value));
    },
    fromDateChanged: (date) => {
      dispatch(updateFromDate(date));
    },
    toDateChanged: (date) => {
      dispatch(updateToDate(date));
    },
    fetchFlights: () => {
      dispatch(fetchFlights());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightPicker);
