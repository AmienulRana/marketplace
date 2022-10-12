import CONFIG from "../config";
import axios from "axios";

export const configOptionsAPI = (method, stateToken, payload) => {
  const token = stateToken || CONFIG.token;
  const options = {
    url: `${CONFIG.URL_API}/store`,
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      ...payload,
    },
  };
  return options;
};

export const getMyStoreAPI = async ({ token: stateToken }) => {
  const token = stateToken || CONFIG.token;
  try {
    const response = await axios.get(`${CONFIG.URL_API}/store`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response?.data;
  } catch (error) {
    return error.response;
  }
};

export const editMyStoreAPI = async (payload, { token: stateToken }) => {
  const options = configOptionsAPI("put", stateToken, payload);

  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    return error.response;
  }
};
