import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlightPicker from './FlightPicker';
import FlightResults from './FlightResults';

class Application extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="application">
        <header className="main-header">

        </header>
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
