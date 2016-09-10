import React from 'react';
import './css/boarding-pass.css';

const BoardingPass = ({ currency, price }) => {

  return (
    <div className="boarding-pass">
      { currency } { price.toFixed(2) }
    </div>
  );

};

export default BoardingPass;
