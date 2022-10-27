import axios from "axios";
import optionsAxios from "@/utils/optionsAxios";

export const getNewProductAPI = async (token) => {
  try {
    const options = optionsAxios("get", token, {}, "/products/new-products");
    const response = await axios(options);
    return response;
  } catch (error) {
    return error.response;
  }
};
