import { FETCH_FLIGHTS_PENDING, FETCH_FLIGHTS_FULFILLED } from '../actionTypes';
import { UPDATE_ORIGIN, UPDATE_DESTINATION, UPDATE_FROM_DATE, UPDATE_TO_DATE } from '../actionTypes';

const initalState = {
  isFetching: false,
  fetched: false,
  data: {}
}

const flights = (state = initalState, action) => {

  switch (action.type) {

    case UPDATE_ORIGIN:
    case UPDATE_DESTINATION:
    case UPDATE_FROM_DATE:
    case UPDATE_TO_DATE:

      state = {
        ...state,
        fetched: false,
        isFetching: false,
        data: {}
      };

      return state;

    case FETCH_FLIGHTS_PENDING:

      state = {
        ...state,
        isFetching: true
      };

      return state;

    case FETCH_FLIGHTS_FULFILLED:

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
