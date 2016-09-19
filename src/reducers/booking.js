const initalState = {
  isFetching: false,
  fetched: false,
  data: {}
}

const booking = (state = initalState, action) => {

  switch (action.type) {

    case 'FETCH_BOOKING_DATA':

      state = {
        ...state,
        isFetching: true
      };

      return state;

    case 'FETCH_BOOKING_DATA_DONE':

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
