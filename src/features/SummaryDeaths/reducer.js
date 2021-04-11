import {
  START_FETCHING_SUMMARY_DEATHS,
  ERROR_FETCHING_SUMMARY_DEATHS,
  SUCCESS_FETCHING_SUMMARY_DEATHS,
} from "./constant";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SUMMARY_DEATHS:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_SUMMARY_DEATHS:
      return { ...state, status: statuslist.success, data: action.data };

    case ERROR_FETCHING_SUMMARY_DEATHS:
      return { ...state, status: statuslist.error };

    default:
      return state;
  }
}
