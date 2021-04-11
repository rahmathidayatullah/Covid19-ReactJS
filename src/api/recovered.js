import axios from "axios";

import { config } from "../config";

// get all recorvered
export async function getRecorveredSummary() {
  return await axios.get(`${config.api_host}/recovered`);
}
