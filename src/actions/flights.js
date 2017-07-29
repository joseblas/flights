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

function getWeekends(months){
  var upTo = new Date();
  upTo.setDate( upTo.getDate() + 30 * months)
  var daysOfYear = [];
  for (var d = new Date(); d <= upTo; d.setDate(d.getDate() + 1)) {
    if( d.getDay() == 5)
    daysOfYear.push( new Date(d) )
  }
  return daysOfYear;
}

export const fetchFlights = () => {
  return (dispatch, getState) => {

    dispatch(fetchFlightsPending());

    const { basket } = getState();
    const { origin, destination, fromDate, toDate, months } = basket; 
    const weekends = getWeekends(months)
    console.log( "months ", months , origin, fromDate)
    
    const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
    
    
    // console.log(toDate)
    
    axios.get("https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/").then( (response) => {
      console.log(" Destination list", response.data.routes)
      const dest = response.data.routes[basket.origin]
      dest.forEach(function(element) {
        weekends.forEach(function(day){
          const sunday = new Date(day.getTime())
          sunday.setDate(day.getDate() + 2)
          const requestURL = `${ baseURL }/flights/from/${ origin }/to/${ element }/${ day }/${ sunday }/250/unique/?limit=15&offset-0`;
          axios.get(requestURL).then((response) => {
             dispatch(fetchFlightsFulfilled(response.data));
          });
        });
            
      }, this);
    })
    
    
    

  };
};
