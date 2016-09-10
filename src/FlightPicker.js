import React, { Component } from 'react';
import AirportSelector from './AirportSelector';
import DatePicker from './DatePicker';
import SubmitButton from './SubmitButton';
import './css/flight-picker.css';

class FlightPicker extends Component {

  originChanged(event) {
    this.props.store.dispatch({
      type: 'UPDATE_ORIGIN',
      payload: event.target.value
    });
  }

  destinationChanged(event) {
    this.props.store.dispatch({
      type: 'UPDATE_DESTINATION',
      payload: event.target.value
    });
  }

  fromDateChanged(datetime) {
    this.props.store.dispatch({
      type: 'UPDATE_FROM_DATE',
      payload: datetime
    });
  }

  toDateChanged(datetime) {
    this.props.store.dispatch({
      type: 'UPDATE_TO_DATE',
      payload: datetime
    });
  }

  findFlights() {

    const { basket } = this.props.store.getState();
    const { origin, destination, fromDate, toDate } = basket;

    this.props.store.dispatch({
      type: 'FETCH_FLIGHTS',
      payload: { origin, destination, fromDate, toDate }
    });

  }

  render() {

    const { basket, booking } = this.props.store.getState();

    const { origin, destination, fromDate, toDate } = basket;
    const { airports, routes } = booking.data;

    const isDisabled = !(origin && destination && fromDate && toDate);

    return (
      <div className="flight-picker">

        <div className="flight-picker__row">

          <AirportSelector
            type="origin"
            title="From"
            value={ origin }
            airports={ airports }
            onChange={ this.originChanged.bind(this) }
          />

          <AirportSelector
            type="destination"
            title="To"
            value={ destination }
            airports={ airports }
            origin={ origin }
            routes={ routes }
            onChange={ this.destinationChanged.bind(this) }
          />

        </div>

        <div className="flight-picker__row">

          <DatePicker
            placeholder="From Date"
            onSelect={ this.fromDateChanged.bind(this) }
           />

          <DatePicker
            placeholder="To Date"
            onSelect={ this.toDateChanged.bind(this) }
          />

        </div>

        <div className="flight-picker__row">

          <SubmitButton
            value="Find Flights"
            disabled={ isDisabled }
            onClick={ this.findFlights.bind(this) }
          />

        </div>

      </div>
    );

  }

}

export default FlightPicker;
