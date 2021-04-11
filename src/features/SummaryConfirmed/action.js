import {
  START_FETCHING_SUMMARY_CONFIRMED,
  ERROR_FETCHING_SUMMARY_CONFIRMED,
  SUCCESS_FETCHING_SUMMARY_CONFIRMED,
} from "./constant";

// function from api
import { getConfirmedSummary } from "../../api/confirmed";

export const fetchSummaryConfirmed = () => {
  return async (dispatch, getState) => {
    dispatch(startSummaryConfirmed());

    try {
      let { data } = await getConfirmedSummary();
      dispatch(successSummaryConfirmed(data));
    } catch (error) {
      dispatch(errorSummaryConfirmed());
    }
  };
};

export const startSummaryConfirmed = () => {
  return {
    type: START_FETCHING_SUMMARY_CONFIRMED,
  };
};
export const errorSummaryConfirmed = () => {
  return {
    type: ERROR_FETCHING_SUMMARY_CONFIRMED,
  };
};
export const successSummaryConfirmed = (data) => {
  return {
    type: SUCCESS_FETCHING_SUMMARY_CONFIRMED,
    data,
  };
};
