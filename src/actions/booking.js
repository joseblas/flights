import axios from 'axios';
import * as types from '../actionTypes';

const fetchBookingDataPending = () => {
  return {
    type: types.FETCH_BOOKING_DATA_PENDING
  }
};

const fetchBookingDataFulfilled = (data) => {
  return {
    type: types.FETCH_BOOKING_DATA_FULFILLED,
    payload: data
  }
};

export const fetchBookingData = () => {
  return (dispatch) => {
    
    dispatch(fetchBookingDataPending());

    const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
    const requestURL = `${ baseURL }/forms/flight-booking-selector/`;
    //get data from heroku: all RyanAir routes
    axios.get(requestURL).then((response) => {
      dispatch(fetchBookingDataFulfilled(response.data));
    });

  };
};
