import {
  START_FETCHING_SUMMARY_DEATHS,
  ERROR_FETCHING_SUMMARY_DEATHS,
  SUCCESS_FETCHING_SUMMARY_DEATHS,
} from "./constant";

// function from api
import { getDeathsSummary } from "../../api/deaths";

export const fetchSummaryDeaths = () => {
  return async (dispatch, getState) => {
    dispatch(startSummaryDeaths());

    try {
      let { data } = await getDeathsSummary();
      dispatch(successSummaryDeaths(data));
    } catch (error) {
      dispatch(errorSummaryDeaths());
    }
  };
};

export const startSummaryDeaths = () => {
  return {
    type: START_FETCHING_SUMMARY_DEATHS,
  };
};
export const errorSummaryDeaths = () => {
  return {
    type: ERROR_FETCHING_SUMMARY_DEATHS,
  };
};
export const successSummaryDeaths = (data) => {
  return {
    type: SUCCESS_FETCHING_SUMMARY_DEATHS,
    data,
  };
};
