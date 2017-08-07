import React from 'react';
import moment from 'moment';
import {Button, Icon} from 'react-materialize'
import './css/boarding-pass.css';


const BoardingPass = ({ currency, price1, price2, dateFrom1, dateTo1, dateFrom2, dateTo2, from, to }) => {

  return (

    <div className="boarding-pass">
      
      <p>
        Price: <strong>{ (price1+ price2).toFixed(2) }</strong>{ currency } {to}
      </p>
      <p>
        { moment(dateFrom1).format('Do MMMM YYYY HH:mm') } => { moment(dateTo1).format('HH:mm ZZ') }
        </p>
      <p>
        { moment(dateFrom2).format('Do MMMM YYYY HH:mm') } => { moment(dateTo2).format('HH:mm ZZ') }
        </p>  
      {/* <p>Price: { currency } <strong>{ price.toFixed(2) }</strong></p> */}
       {/* <p>Fly Out: { moment(dateFrom).format('Do MMMM YYYY') }</p>  */}
       {/* <p>Fly Back: { moment(dateTo).format('Do MMMM YYYY') }</p>  */}
      {/* <Button waves='light'> */}
		    {/* <Icon>thumb_up</Icon> */}
	    {/* </Button> */}
    </div>
  );

};

export default BoardingPass;
