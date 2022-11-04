import optionsAxios from "@/utils/optionsAxios";
import axios from "axios";
import CONFIG from "@/config";

export const getMyCartsAPI = async (token) => {
  try {
    const options = optionsAxios("get", token, {}, "/cart");
    const response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const deleteMyCartsAPI = async (token, id) => {
  try {
    const options = optionsAxios("delete", token, {}, `/cart/${id}`);
    const response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const checkOngkirAPI = async (data) => {
  try {
    const response = await axios.post(`${CONFIG.URL_API}/user/check-ongkir`, {
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
