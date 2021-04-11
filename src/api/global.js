import axios from "axios";

import { config } from "../config";

// get global summary
export async function getGlobalSummary() {
  return await axios.get(`${config.api_host}`);
}
// get all country
export async function getAllCountry() {
  return await axios.get(`${config.api_host}/countries/`);
}
// get single country
export async function getSingleCountry(country) {
  return await axios.get(`${config.api_host}/countries/${country}`);
}
