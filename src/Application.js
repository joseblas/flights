import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import FlightPicker from './FlightPicker';
import FlightResults from './FlightResults';
import { fetchBookingData } from './actions/booking';

class Application extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBookingData());
  }

  render() {

    const { booking, flights } = this.props;
    const isLoading = (booking.isFetching || flights.isFetching);

    return (
      <div className="application">
        <Header isLoading={ isLoading } />
        <FlightPicker />
        <FlightResults />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
    flights: state.flights
  }
}

export default connect(mapStateToProps)(Application);
