import { UPDATE_ORIGIN, UPDATE_DESTINATION, UPDATE_FROM_DATE, UPDATE_TO_DATE } from '../actionTypes';

export const updateOrigin = (origin) => {
  return {
    type: UPDATE_ORIGIN,
    payload: origin
  }
};

export const updateDestination = (destination) => {
  return {
    type: UPDATE_DESTINATION,
    payload: destination
  }
};

export const updateFromDate = (date) => {
  return {
    type: UPDATE_FROM_DATE,
    payload: date
  }
};

export const updateToDate = (date) => {
  return {
    type: UPDATE_TO_DATE,
    payload: date
  }
};
