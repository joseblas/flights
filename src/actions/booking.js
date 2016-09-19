import axios from 'axios';

export const fetchBookingData = () => {
  return (dispatch) => {

    dispatch({
      type: 'FETCH_BOOKING_DATA'
    });

    const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
    const requestURL = `${ baseURL }/forms/flight-booking-selector/`;

    axios.get(requestURL).then((response) => {
      dispatch({
        type: 'FETCH_BOOKING_DATA_DONE',
        payload: response.data
      });
    });

  };
};
