import {
  START_FETCHING_SUMMARY_RECORVERED,
  ERROR_FETCHING_SUMMARY_RECORVERED,
  SUCCESS_FETCHING_SUMMARY_RECORVERED,
} from "./constant";

// function from api
import { getRecorveredSummary } from "../../api/recovered";

export const fetchSummaryRecorvered = () => {
  return async (dispatch, getState) => {
    dispatch(startSummaryRecorvered());

    try {
      let { data } = await getRecorveredSummary();
      dispatch(successSummaryRecorvered(data));
    } catch (error) {
      dispatch(errorSummaryRecorvered());
    }
  };
};

export const startSummaryRecorvered = () => {
  return {
    type: START_FETCHING_SUMMARY_RECORVERED,
  };
};
export const errorSummaryRecorvered = () => {
  return {
    type: ERROR_FETCHING_SUMMARY_RECORVERED,
  };
};
export const successSummaryRecorvered = (data) => {
  return {
    type: SUCCESS_FETCHING_SUMMARY_RECORVERED,
    data,
  };
};
