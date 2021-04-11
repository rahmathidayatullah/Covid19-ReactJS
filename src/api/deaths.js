import axios from "axios";

import { config } from "../config";

// get all deaths
export async function getDeathsSummary() {
  return await axios.get(`${config.api_host}/deaths`);
}
