import axios from "axios";
import { environments } from "config";

const axiosInstance = axios.create({
  baseURL: environments.apiEndpoint,
});

axiosInstance.interceptors.request.use(async (config) => {
  return {
    ...config,
  };
});

axiosInstance.interceptors.response.use((response) => response.data);

export default axiosInstance;
