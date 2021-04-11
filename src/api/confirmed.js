import axios from "axios";

import { config } from "../config";

// get all confirmed
export async function getConfirmedSummary() {
  return await axios.get(`${config.api_host}/confirmed`);
}
