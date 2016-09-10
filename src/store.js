import { createStore } from 'redux';
import { combineReducers } from 'redux';
import basket from './reducers/basket';
import booking from './reducers/booking';
import flights from './reducers/flights';

const reducers = combineReducers({
  basket,
  booking,
  flights
});

const store = createStore(reducers);

export default store;
