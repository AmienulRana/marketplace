import optionsAxios from "@/utils/optionsAxios";
import axios from "axios";
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
