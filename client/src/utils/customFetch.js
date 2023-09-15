import axios from "axios";
// URL
import { BASE_URL } from "../constants/api";

const customFetch = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default customFetch;
