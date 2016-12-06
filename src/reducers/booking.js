import * as types from '../actionTypes';

const initalState = {
  isFetching: false,
  fetched: false,
  data: {}
}

const booking = (state = initalState, action) => {

  switch (action.type) {

    case types.FETCH_BOOKING_DATA_PENDING:

      return {
        ...state,
        isFetching: true
      };

    case types.FETCH_BOOKING_DATA_FULFILLED:

      return {
        ...state,
        fetched: true,
        isFetching: false,
        data: action.payload
      };

    default: return state;

  }

}

export default booking;
