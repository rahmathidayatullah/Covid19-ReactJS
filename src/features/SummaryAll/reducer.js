import {
  START_FETCHING_SUMMARY,
  ERROR_FETCHING_SUMMARY,
  SUCCESS_FETCHING_SUMMARY,
  START_FETCHING_COUNTRY,
  ERROR_FETCHING_COUNTRY,
  SUCCESS_FETCHING_COUNTRY,
  START_FETCHING_COUNTRY_SINGLE,
  ERROR_FETCHING_COUNTRY_SINGLE,
  SUCCESS_FETCHING_COUNTRY_SINGLE,
} from "./constant";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  allcountry: [],
  singlecountry: [],
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // reducer all sumarry
    case START_FETCHING_SUMMARY:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_SUMMARY:
      return { ...state, status: statuslist.success, data: action.data };

    case ERROR_FETCHING_SUMMARY:
      return { ...state, status: statuslist.error };

    // reducer all country
    case START_FETCHING_COUNTRY:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_COUNTRY:
      return { ...state, status: statuslist.success, allcountry: action.data };

    case ERROR_FETCHING_COUNTRY:
      return { ...state, status: statuslist.error };

    // reducer single country
    case START_FETCHING_COUNTRY_SINGLE:
      return { ...state, status: statuslist.process };

    case SUCCESS_FETCHING_COUNTRY_SINGLE:
      return {
        ...state,
        status: statuslist.success,
        singlecountry: action.data,
      };

    case ERROR_FETCHING_COUNTRY_SINGLE:
      return { ...state, status: statuslist.error };

    default:
      return state;
  }
}
