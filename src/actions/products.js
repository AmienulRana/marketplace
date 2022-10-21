import CONFIG from "../config";
import axios from "axios";

export const configOptionsAPI = (method, stateToken, payload, url = "") => {
  const token = stateToken || CONFIG.token;
  const options = {
    url: `${CONFIG.URL_API}/products${url}`,
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

export const detailProductAPI = async (id, token) => {
  // const token = CONFIG.token || stateToken;
  const options = configOptionsAPI("get", token, {}, `/${id}`);
  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const editProductAPI = async (payload, { token: stateToken }, id) => {
  const token = CONFIG.token || stateToken;
  try {
    const response = await axios.put(
      `${CONFIG.URL_API}/products/${id}`,
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
