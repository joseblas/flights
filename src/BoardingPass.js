import React from 'react';
import moment from 'moment';
import './css/boarding-pass.css';

const BoardingPass = ({ currency, price, dateFrom, dateTo }) => {

  return (
    <div className="boarding-pass">
      <p>Price: { currency } <strong>{ price.toFixed(2) }</strong></p>
      <p>Fly Out: { moment(dateFrom).format('Do MMMM YYYY') }</p>
      <p>Fly Back: { moment(dateTo).format('Do MMMM YYYY') }</p>
    </div>
  );

};

export default BoardingPass;
