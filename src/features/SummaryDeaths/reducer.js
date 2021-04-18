import {
  START_FETCHING_SUMMARY_DEATHS,
  ERROR_FETCHING_SUMMARY_DEATHS,
  SUCCESS_FETCHING_SUMMARY_DEATHS,
  SET_OFFSET,
} from "./constant";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  dataForPagination: [],
  dataAll: [],
  status: statuslist.idle,
  pages: 0,
  perPage: 5,
  offset: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SUMMARY_DEATHS:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_SUMMARY_DEATHS:
      return {
        ...state,
        status: statuslist.success,
        dataForPagination: action.deaths,
        dataAll: action.data,
        pages: action.pages,
      };

    case ERROR_FETCHING_SUMMARY_DEATHS:
      return { ...state, status: statuslist.error };

    case SET_OFFSET:
      return { ...state, offset: action.offset };

    default:
      return state;
  }
}
