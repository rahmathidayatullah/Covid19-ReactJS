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

// function from api
import {
  getGlobalSummary,
  getAllCountry,
  getSingleCountry,
} from "../../api/global";

// GET ALL SUMMARY
export const fetchSummary = () => {
  return async (dispatch, getState) => {
    dispatch(startSummary());

    try {
      let { data } = await getGlobalSummary();
      dispatch(successSummary(data));
    } catch (error) {
      dispatch(errorSummary());
    }
  };
};

export const startSummary = () => {
  return {
    type: START_FETCHING_SUMMARY,
  };
};
export const errorSummary = () => {
  return {
    type: ERROR_FETCHING_SUMMARY,
  };
};
export const successSummary = (data) => {
  return {
    type: SUCCESS_FETCHING_SUMMARY,
    data,
  };
};
// GET ALL COUNTRY
export const fetchCountry = () => {
  return async (dispatch, getState) => {
    dispatch(startCountry());

    try {
      let { data } = await getAllCountry();
      dispatch(successCountry(data));
    } catch (error) {
      dispatch(errorCountry());
    }
  };
};

export const startCountry = () => {
  return {
    type: START_FETCHING_COUNTRY,
  };
};
export const errorCountry = () => {
  return {
    type: ERROR_FETCHING_COUNTRY,
  };
};
export const successCountry = (data) => {
  return {
    type: SUCCESS_FETCHING_COUNTRY,
    data,
  };
};
// GET SINGLE COUNTRY
export const fetchCountrySingle = (country) => {
  return async (dispatch, getState) => {
    dispatch(startCountrySingle());

    try {
      let { data } = await getSingleCountry(country);
      dispatch(successCountrySingle(data));
    } catch (error) {
      dispatch(errorCountrySingle());
    }
  };
};

export const startCountrySingle = () => {
  return {
    type: START_FETCHING_COUNTRY_SINGLE,
  };
};
export const errorCountrySingle = () => {
  return {
    type: ERROR_FETCHING_COUNTRY_SINGLE,
  };
};
export const successCountrySingle = (data) => {
  return {
    type: SUCCESS_FETCHING_COUNTRY_SINGLE,
    data,
  };
};
