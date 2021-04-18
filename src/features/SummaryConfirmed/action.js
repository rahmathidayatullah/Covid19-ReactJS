import {
  START_FETCHING_SUMMARY_CONFIRMED,
  ERROR_FETCHING_SUMMARY_CONFIRMED,
  SUCCESS_FETCHING_SUMMARY_CONFIRMED,
  SET_OFFSET,
} from "./constant";

// function from api
import { getConfirmedSummary } from "../../api/confirmed";

export const fetchSummaryConfirmed = () => {
  return async (dispatch, getState) => {
    dispatch(startSummaryConfirmed());

    try {
      let offset = getState().confirmed.offset || 0;
      let perPage = getState().confirmed.perPage || 0;
      let { data } = await getConfirmedSummary();
      const slice = data.slice(offset, offset + perPage);
      let pages = Math.ceil(data.length / perPage);

      dispatch(successSummaryConfirmed({ confirmed: slice, pages, data }));
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
export const successSummaryConfirmed = ({ confirmed, pages, data }) => {
  return {
    type: SUCCESS_FETCHING_SUMMARY_CONFIRMED,
    confirmed,
    pages,
    data,
  };
};

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    offset,
  };
};
