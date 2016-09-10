import React, { Component } from 'react';

class AirportSelector extends Component {

  getValidAirports() {

    let validAirports = [];
    const { airports } = this.props;

    if (airports) {

      validAirports = [...airports];
      const { type, origin, routes } = this.props;

      if (type === 'destination' && origin && routes) {

        validAirports = validAirports.filter(airport =>
          routes[origin].includes(airport.iataCode)
        );

      }

    }

    return validAirports;

  }

  getOptions() {

    let markup = '';
    const airports = this.getValidAirports();

    markup = airports.map(airport =>
      <option key={ airport.iataCode } value={ airport.iataCode }>{ airport.name }</option>
    );

    return markup;

  }

  render() {
    return (
      <select className="standard-input" value={ this.props.value } onChange={ this.props.onChange }>
        <option value="">{ this.props.title }</option>
        { this.getOptions() }
      </select>
    );
  }

}

export default AirportSelector;
