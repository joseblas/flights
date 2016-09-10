import React, { Component } from 'react';
import FlightPicker from './FlightPicker';
import FlightResults from './FlightResults';

class App extends Component {

  componentDidMount() {
    this.props.store.dispatch({
      type: 'FETCH_BOOKING_DATA'
    });
  }

  render() {
    return (
      <div className="application">
        <header className="main-header">

        </header>
        <FlightPicker store={ this.props.store } />
        <FlightResults store={ this.props.store } />
      </div>
    );
  }

}

export default App;
