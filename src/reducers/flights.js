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
      var f = state.data.flights
      if(action.payload[0].fares.length > 0 && action.payload[1].fares.length > 0){
        f = [[action.payload[0].fares,action.payload[1].fares]]
        if( state.data.flights){
          f = state.data.flights.concat([[action.payload[0].fares,action.payload[1].fares]])
        }
      }
      
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
