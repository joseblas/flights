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

      return {
        ...state,
        fetched: false,
        isFetching: false,
        data: {}
      };

    case types.FETCH_FLIGHTS_PENDING:

      return {
        ...state,
        isFetching: true
      };

    case types.FETCH_FLIGHTS_FULFILLED:
      console.log(action.payload.fares)
      console.log( state.data)
      const f = action.payload.fares.concat(state.data.flights)
      // console.log({"flights": f}) 
      return {
        ...state,
        fetched: true,
        isFetching: false,
        data: {"flights": f}
      };

    default: return state;

  }

}

export default flights;
