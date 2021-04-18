import {
  START_FETCHING_SUMMARY_DEATHS,
  ERROR_FETCHING_SUMMARY_DEATHS,
  SUCCESS_FETCHING_SUMMARY_DEATHS,
  SET_OFFSET,
} from "./constant";

// function from api
import { getDeathsSummary } from "../../api/deaths";

export const fetchSummaryDeaths = () => {
  return async (dispatch, getState) => {
    dispatch(startSummaryDeaths());

    try {
      let offset = getState().deaths.offset || 0;
      let perPage = getState().deaths.perPage || 0;
      let { data } = await getDeathsSummary();
      const slice = data.slice(offset, offset + perPage);
      let pages = Math.ceil(data.length / perPage);
      dispatch(successSummaryDeaths({ deaths: slice, pages, data }));
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

export const successSummaryDeaths = ({ deaths, pages, data }) => {
  return {
    type: SUCCESS_FETCHING_SUMMARY_DEATHS,
    deaths,
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
