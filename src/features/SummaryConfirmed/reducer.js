import {
  START_FETCHING_SUMMARY_CONFIRMED,
  ERROR_FETCHING_SUMMARY_CONFIRMED,
  SUCCESS_FETCHING_SUMMARY_CONFIRMED,
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
  status: statuslist.idle,
  dataAll: [],
  pages: 0,
  perPage: 5,
  offset: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SUMMARY_CONFIRMED:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_SUMMARY_CONFIRMED:
      return {
        ...state,
        status: statuslist.success,
        dataForPagination: action.confirmed,
        pages: action.pages,
        dataAll: action.data,
      };

    case ERROR_FETCHING_SUMMARY_CONFIRMED:
      return { ...state, status: statuslist.error };

    case SET_OFFSET:
      return { ...state, offset: action.offset };

    default:
      return state;
  }
}
