const initalState = {
  origin: 'DUB',
  destination: '',
  fromDate: '',
  toDate: ''
}

const basket = (state = initalState, action) => {

  switch (action.type) {

    case 'UPDATE_ORIGIN':

      state = {
        ...state,
        destination: '',
        origin: action.payload
      };

      return state;

    case 'UPDATE_DESTINATION':

      state = {
        ...state,
        destination: action.payload
      };

      return state;

    case 'UPDATE_FROM_DATE':

      state = {
        ...state,
        fromDate: action.payload
      };

      return state;

    case 'UPDATE_TO_DATE':

      state = {
        ...state,
        toDate: action.payload
      };

      return state;

    default: return state;

  }

}

export default basket;
