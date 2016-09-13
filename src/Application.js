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
