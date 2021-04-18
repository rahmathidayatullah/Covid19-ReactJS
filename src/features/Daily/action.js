import {
  START_FETCHING_DAILY,
  ERROR_FETCHING_DAILY,
  SUCCESS_FETCHING_DAILY,
  SET_OFFSET,
} from "./constant";

// function from api
import { getSingleDaily } from "../../api/daily";

export const fetchDaily = (date) => {
  return async (dispatch, getState) => {
    dispatch(startDaily());

    try {
      let offset = getState().daily.offset || 0;
      let perPage = getState().daily.perPage || 0;
      let { data } = await getSingleDaily(date);
      const slice = data.slice(offset, offset + perPage);
      let pages = Math.ceil(data.length / perPage);
      dispatch(successDaily({ daily: slice, pages }));
    } catch (error) {
      console.log(error);
      dispatch(errorDaily());
    }
  };
};

export const startDaily = () => {
  return {
    type: START_FETCHING_DAILY,
  };
};
export const errorDaily = () => {
  return {
    type: ERROR_FETCHING_DAILY,
  };
};
export const successDaily = ({ daily, pages }) => {
  return {
    type: SUCCESS_FETCHING_DAILY,
    daily,
    pages,
  };
};

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    offset,
  };
};
