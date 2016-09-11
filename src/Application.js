import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import FlightPicker from './FlightPicker';
import FlightResults from './FlightResults';

class Application extends Component {

  componentDidMount() {
    this.props.fetchData();
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch({ type: 'FETCH_BOOKING_DATA' });
    }
  }
}

export default connect(null, mapDispatchToProps)(Application);
