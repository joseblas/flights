import axios from 'axios';
import * as types from '../actionTypes';

const fetchFlightsPending = () => {
  return {
    type: types.FETCH_FLIGHTS_PENDING
  }
};

const fetchFlightsFulfilled = (data) => {
  return {
    type: types.FETCH_FLIGHTS_FULFILLED,
    payload: data
  }
};

function getWeekends(days){
  var upTo = new Date();
  upTo.setDate( upTo.getDate() +  days)
  var daysOfYear = [];
  for (var d = new Date(); d <= upTo; d.setDate(d.getDate() + 1)) {
    if( d.getDay() === 5)
    daysOfYear.push( new Date(d) )
  }
  return daysOfYear;
}

var dateFormat = require('dateformat');
const format = "yyyy-mm-dd"


export const fetchFlights = () => {
  return (dispatch, getState) => {

    dispatch(fetchFlightsPending());

    const { basket } = getState();
    const { origin, destination, fromDate, toDate, months } = basket; 
    const weekends = getWeekends(months)
    console.log( "months ", months , origin, fromDate)
    
    const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
    const baseURL3 = 'https://api.ryanair.com/farefinder/3';
    
    axios.get("https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/").then( (response) => {
      console.log(" Destination list", response.data.routes)
      const dest = response.data.routes[basket.origin]
      // const destFake = [dest[0]]
      dest.forEach(function(element) {
        weekends.forEach(function(day){
          const sunday = new Date(day.getTime())
          const f = dateFormat( day, format)
          const s = dateFormat( sunday.setDate(day.getDate() + 2), format)
          const options = "&language=en&limit=10&market=en-gb&offset=0"
          const requestURL = `${ baseURL3 }/oneWayFares?departureAirportIataCode=${ origin }&outboundDepartureDateFrom=${f}&outboundDepartureDateTo=${s}&arrivalAirportIataCode=${element}`;
    
          // console.log(dateFormat(day, format))
          // console.log(dateFormat(sunday, "yyyy-mm-dd"))
          console.log("URL ", requestURL)
          axios.get(requestURL+options).then((response) => {
             dispatch(fetchFlightsFulfilled(response.data));
          });
        });
            
      }, this);
    })
    
    
    

  };
};
