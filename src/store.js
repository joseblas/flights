import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import basket from './reducers/basket';
import booking from './reducers/booking';
import flights from './reducers/flights';

const reducers = combineReducers({
  basket,
  booking,
  flights
});

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducers,
  middleware
);

export default store;
