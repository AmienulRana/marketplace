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
