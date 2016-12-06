import * as types from '../actionTypes';

const initalState = {
  origin: 'DUB',
  destination: '',
  fromDate: '',
  toDate: ''
}

const basket = (state = initalState, action) => {

  switch (action.type) {

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
