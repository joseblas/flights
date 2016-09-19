import axios from 'axios';
import { FETCH_FLIGHTS_PENDING, FETCH_FLIGHTS_FULFILLED } from '../actionTypes';

const fetchFlightsPending = () => {
  return {
    type: FETCH_FLIGHTS_PENDING
  }
};

const fetchFlightsFulfilled = (data) => {
  return {
    type: FETCH_FLIGHTS_FULFILLED,
    payload: data
  }
};

export const fetchFlights = () => {
  return (dispatch, getState) => {

    dispatch(fetchFlightsPending());

    const { basket } = getState();
    const { origin, destination, fromDate, toDate } = basket;

    const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
    const requestURL = `${ baseURL }/flights/from/${ origin }/to/${ destination }/${ fromDate }/${ toDate }/250/unique/?limit=15&offset-0`;

    axios.get(requestURL).then((response) => {
      dispatch(fetchFlightsFulfilled(response.data));
    });

  };
};
