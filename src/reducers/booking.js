import axios from 'axios';
import store from '../store';

const initalState = {
  isFetching: false,
  fetched: false,
  data: {}
}

const booking = (state = initalState, action) => {

  switch (action.type) {

    case 'FETCH_BOOKING_DATA':

      state = {
        ...state,
        isFetching: true
      };

      const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
      const requestURL = `${ baseURL }/forms/flight-booking-selector/`;

      axios.get(requestURL).then((response) => {

        store.dispatch({
          type: 'FETCH_BOOKING_DATA_DONE',
          payload: response.data
        });

      })
      .catch((error) => {
        console.log(error);
      });

      return state;

    case 'FETCH_BOOKING_DATA_DONE':

      state = {
        ...state,
        fetched: true,
        isFetching: false,
        data: action.payload
      };

      return state;

    default: return state;

  }

}

export default booking;
