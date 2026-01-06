import axios from "axios";
import { API_BASE } from "../constants";
import { getPreferenceValues } from "@raycast/api";

const preferences = getPreferenceValues();

export default axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${preferences.apikey}`,
    "X-Flavortown-Ext-4390": true,
  },
});
