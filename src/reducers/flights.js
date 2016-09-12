import axios from 'axios';
import store from '../store';

const initalState = {
  isFetching: false,
  fetched: false,
  data: {}
}

const flights = (state = initalState, action) => {

  switch (action.type) {

    case 'UPDATE_ORIGIN':
    case 'UPDATE_DESTINATION':
    case 'UPDATE_FROM_DATE':
    case 'UPDATE_TO_DATE':

      state = {
        ...state,
        fetched: false,
        isFetching: false,
        data: {}
      };

      return state;

    case 'FETCH_FLIGHTS':

      state = {
        ...state,
        isFetching: true
      };

      const { origin, destination, fromDate, toDate } = action.payload;

      const baseURL = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2';
      const requestURL = `${ baseURL }/flights/from/${ origin }/to/${ destination }/${ fromDate }/${ toDate }/250/unique/?limit=15&offset-0`;

      axios.get(requestURL).then((response) => {

        store.dispatch({
          type: 'FETCH_FLIGHTS_DONE',
          payload: response.data
        });

      }).catch((error) => {
        console.log(error);
      });

      return state;

    case 'FETCH_FLIGHTS_DONE':

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

export default flights;
