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

      state = {
        ...state,
        destination: '',
        origin: action.payload
      };

      return state;

    case types.UPDATE_DESTINATION:

      state = {
        ...state,
        destination: action.payload
      };

      return state;

    case types.UPDATE_FROM_DATE:

      state = {
        ...state,
        fromDate: action.payload
      };

      return state;

    case types.UPDATE_TO_DATE:

      state = {
        ...state,
        toDate: action.payload
      };

      return state;

    default: return state;

  }

}

export default basket;
