import CONFIG from "../config";
import axios from "axios";
export const getMyStoreAPI = async () => {
  try {
    const response = await axios.get(`${CONFIG.URL_API}/store`, {
      headers: { Authorization: `Bearer ${CONFIG.token}` },
    });
    return response?.data;
  } catch (error) {
    return error.response;
  }
};

export const editMyStoreAPI = async (payload) => {
  const options = {
    url: `${CONFIG.URL_API}/store`,
    method: "put",
    headers: {
      Authorization: `Bearer ${CONFIG.token}`,
    },
    data: {
      ...payload,
    },
  };
  try {
    const response = await axios(options);
    return response?.data;
  } catch (error) {
    return error.response.data;
  }
};
