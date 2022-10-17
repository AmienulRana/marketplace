import CONFIG from "../config";
import axios from "axios";

export const configOptionsAPI = (method, stateToken, payload) => {
  const token = stateToken || CONFIG.token;
  const options = {
    url: `${CONFIG.URL_API}/products`,
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

export const getProductAPI = async (token) => {
  try {
    const options = configOptionsAPI("get", token, {});
    const response = await axios(options);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const addProductAPI = async (payload, { token: stateToken }) => {
  const token = CONFIG.token || stateToken;
  try {
    const response = await axios.post(`${CONFIG.URL_API}/products`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
