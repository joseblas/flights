import * as types from '../actionTypes';

const initalState = {
  origin: 'SVQ',
  destination: '',
  fromDate: '',
  toDate: '',
  months: '3'
}

const basket = (state = initalState, action) => {

  switch (action.type) {
    case types.MONTH_UPDATE:
    
      return {
        ...state,
        months: action.payload
      }
    case types.UPDATE_ORIGIN:

      return {
        ...state,
        destination: '',
        origin: action.payload
      };

    case types.UPDATE_DESTINATION:

      return {
        ...state,
        destination: action.payload
      };

    case types.UPDATE_FROM_DATE:

      return {
        ...state,
        fromDate: action.payload
      };

    case types.UPDATE_TO_DATE:

      return {
        ...state,
        toDate: action.payload
      };

    default: return state;

  }

}

export default basket;
