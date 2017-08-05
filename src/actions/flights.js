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

function getWeekends(fromDate, days){
  if(!fromDate){
    fromDate = new Date()
  }
  var upTo = new Date()
  console.log("days ", days * 1000 * 60 * 24)
  upTo.setTime( fromDate.getTime() +  days * 1000 * 60 * 60 * 24)
  var daysOfYear = [];
  console.log("fromDate ", fromDate)
  console.log("upTo ", upTo)
  for (var d = new Date(fromDate); d <= upTo; d.setDate(d.getDate() + 1)) {
    if( d.getDay() === 5)
      daysOfYear.push( new Date(d) )
  }
  console.log("daysOfYear  ", daysOfYear)
  return daysOfYear;
}

var dateFormat = require('dateformat');
const format = "yyyy-mm-dd"


export const fetchFlights = () => {
  return (dispatch, getState) => {

    

    const { basket } = getState();
    const { origin, destination, fromDate, toDate, months } = basket; 
    const weekends = getWeekends(fromDate, months)
    console.log( "months ", months , origin, fromDate)
    
    const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
    const baseURL3 = 'https://api.ryanair.com/farefinder/3';
    
    axios.get("https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/").then( (response) => {
      // console.log(" Destination list", response.data.routes)
      const dest = response.data.routes[basket.origin]
      // const destFake = [dest[0]]
      dest.forEach(function(element) {
        weekends.forEach(function(day){
          dispatch(fetchFlightsPending());
          const sunday = new Date(day.getTime())
          const f = dateFormat( day, format)
          const s = dateFormat( sunday.setDate(day.getDate() + 2), format)
          const options = "&language=en&limit=10&market=en-gb&offset=0"
          const requestURL = `${ baseURL3 }/oneWayFares?departureAirportIataCode=${ origin }&outboundDepartureDateFrom=${f}&outboundDepartureDateTo=${f}&arrivalAirportIataCode=${element}`;
          const requestURL_return = `${ baseURL3 }/oneWayFares?departureAirportIataCode=${ element }&outboundDepartureDateFrom=${s}&outboundDepartureDateTo=${s}&arrivalAirportIataCode=${origin}`;
          // console.log(dateFormat(day, format))
          // console.log(dateFormat(sunday, "yyyy-mm-dd"))
          // console.log("URL ", requestURL)
          // console.log("URL ", requestURL_return)
          axios.all([axios.get(requestURL+options), axios.get(requestURL_return+options)])
          .then( (data) => {
            console.log("Ida, ", data[0].data.size)
            console.log("Vuelta ", data[1].data.size)
            dispatch(fetchFlightsFulfilled([data[0].data, data[1].data]));
          })
          // axios.get(requestURL+options).then((response) => {
            //  dispatch(fetchFlightsFulfilled(response.data));
          // });
        });
            
      }, this);
    })
    
    
    

  };
};
