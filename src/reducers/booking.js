import * as types from '../actionTypes';

const initalState = {
  isFetching: false,
  fetched: false,
  data: {}
}

const booking = (state = initalState, action) => {

  switch (action.type) {

    case types.FETCH_BOOKING_DATA_PENDING:

      state = {
        ...state,
        isFetching: true
      };

      return state;

    case types.FETCH_BOOKING_DATA_FULFILLED:

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
