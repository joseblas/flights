import React from 'react';

const AirportSelector = ({ type, title, value, airports, origin, routes, onChange }) => {

  const getValidAirports = () => {

    let validAirports = airports || [];

    if (type === 'destination' && origin && routes) {
      validAirports = validAirports.filter(airport =>
        routes[origin].includes(airport.iataCode)
      );
    }

    return validAirports;

  }

  const getOptions = () => {

    let markup = '';
    const airports = getValidAirports();

    markup = airports.map(airport =>
      <option key={ airport.iataCode } value={ airport.iataCode } defaultValue="">{ airport.name }</option>
    );

    return markup;

  }

  return (
    <select className="standard-input"  value={ value } onChange={ onChange }>
      <option value="" disabled>{ title }</option>
      { getOptions() }
    </select>
  );

};

export default AirportSelector;
