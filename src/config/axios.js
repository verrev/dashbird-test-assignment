import axios from "axios";
import showToast from "components/Core/Toast";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.config || !error.config.toastless) {
      const errorMessageKey = `errors.api.${
        (error.response && error.response.data && error.response.data.code) || 0
      }`;

      showToast(errorMessageKey, true);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
