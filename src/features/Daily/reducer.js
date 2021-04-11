import {
  START_FETCHING_DAILY,
  ERROR_FETCHING_DAILY,
  SUCCESS_FETCHING_DAILY,
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
    // reducer daily
    case START_FETCHING_DAILY:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_DAILY:
      return { ...state, status: statuslist.success, data: action.data };

    case ERROR_FETCHING_DAILY:
      return { ...state, status: statuslist.error };

    default:
      return state;
  }
}
