import {
  START_FETCHING_DAILY,
  ERROR_FETCHING_DAILY,
  SUCCESS_FETCHING_DAILY,
} from "./constant";

// function from api
import { getSingleDaily } from "../../api/daily";

export const fetchDaily = (date) => {
  return async (dispatch, getState) => {
    dispatch(startDaily());

    try {
      let { data } = await getSingleDaily(date);
      dispatch(successDaily(data));
    } catch (error) {
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
export const successDaily = (data) => {
  return {
    type: SUCCESS_FETCHING_DAILY,
    data,
  };
};
