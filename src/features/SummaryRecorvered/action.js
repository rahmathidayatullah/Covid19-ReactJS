import {
  START_FETCHING_SUMMARY_RECORVERED,
  ERROR_FETCHING_SUMMARY_RECORVERED,
  SUCCESS_FETCHING_SUMMARY_RECORVERED,
  SET_OFFSET,
} from "./constant";

// function from api
import { getRecorveredSummary } from "../../api/recovered";

export const fetchSummaryRecorvered = () => {
  return async (dispatch, getState) => {
    dispatch(startSummaryRecorvered());

    try {
      let offset = getState().recorvered.offset || 0;
      let perPage = getState().recorvered.perPage || 0;
      let { data } = await getRecorveredSummary();
      const slice = data.slice(offset, offset + perPage);
      let pages = Math.ceil(data.length / perPage);

      dispatch(successSummaryRecorvered({ recorvered: slice, pages, data }));
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
export const successSummaryRecorvered = ({ recorvered, pages, data }) => {
  return {
    type: SUCCESS_FETCHING_SUMMARY_RECORVERED,
    recorvered,
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
