import axios from "axios";
import { BASE_API_URL } from "../../environment/environment";
import tokenService from "../services/tokenService";
// import { store } from "../..//store";
import { removeRequest } from "../../slices/loadingSlice";
import { handleError } from "../errorHandlers/errorHandlers";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = tokenService.getToken();
  config.headers.Authorization = "Bearer " + token;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // store.dispatch(removeRequest());
    return response;
  },
  (error) => {
    if (error.response) handleError(error);
    // store.dispatch(removeRequest());
    return error;
  }
);

export default axiosInstance;
