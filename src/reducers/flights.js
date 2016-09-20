import * as types from '../actionTypes';

const initalState = {
  isFetching: false,
  fetched: false,
  data: {}
}

const flights = (state = initalState, action) => {

  switch (action.type) {

    case types.UPDATE_ORIGIN:
    case types.UPDATE_DESTINATION:
    case types.UPDATE_FROM_DATE:
    case types.UPDATE_TO_DATE:

      state = {
        ...state,
        fetched: false,
        isFetching: false,
        data: {}
      };

      return state;

    case types.FETCH_FLIGHTS_PENDING:

      state = {
        ...state,
        isFetching: true
      };

      return state;

    case types.FETCH_FLIGHTS_FULFILLED:

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
