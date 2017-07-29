import * as types from '../actionTypes';

export const updateOrigin = (origin) => {
  return {
    type: types.UPDATE_ORIGIN,
    payload: origin
  }
};

export const updateDestination = (destination) => {
  return {
    type: types.UPDATE_DESTINATION,
    payload: destination
  }
};

export const updateFromDate = (date) => {
  
  return {
    type: types.UPDATE_FROM_DATE,
    payload: date
  }
};

export const updateToDate = (date) => {
  return {
    type: types.UPDATE_TO_DATE,
    payload: date
  }
};

export const updateMonths = (months) => {
  return {
    type: types.MONTH_UPDATE,
    payload: months
  }
}
