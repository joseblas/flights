import axios from 'axios';

export const fetchFlights = () => {
  return (dispatch, getState) => {

    dispatch({
      type: 'FETCH_FLIGHTS'
    });

    const { basket } = getState();
    const { origin, destination, fromDate, toDate } = basket;

    const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
    const requestURL = `${ baseURL }/flights/from/${ origin }/to/${ destination }/${ fromDate }/${ toDate }/250/unique/?limit=15&offset-0`;

    axios.get(requestURL).then((response) => {
      dispatch({
        type: 'FETCH_FLIGHTS_DONE',
        payload: response.data
      });
    });

  };
};
