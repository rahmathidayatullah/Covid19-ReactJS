import {
  START_FETCHING_DAILY,
  ERROR_FETCHING_DAILY,
  SUCCESS_FETCHING_DAILY,
  SET_OFFSET,
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
  pages: 0,
  perPage: 10,
  offset: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // reducer daily
    case START_FETCHING_DAILY:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_DAILY:
      return {
        ...state,
        status: statuslist.success,
        data: action.daily,
        pages: action.pages,
      };

    case ERROR_FETCHING_DAILY:
      return { ...state, status: statuslist.error, pages: 0 };

    case SET_OFFSET:
      return { ...state, offset: action.offset };

    default:
      return state;
  }
}
