import axios from "axios";

import { config } from "../config";

// get single country
export async function getSingleDaily(date) {
  return await axios.get(`${config.api_host}/daily/${date}`);
}

// 2 - 14 - 2020;
