import CONFIG from "@/config";
import optionsAxios from "@/utils/optionsAxios";
import axios from "axios";

export const getProductPurchaseAPI = async (token) => {
  try {
    const options = optionsAxios("get", token, {}, `/transaction`);
    const response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
export const getDetailTransactionAPI = async (token, id) => {
  try {
    const options = optionsAxios("put", token, {}, `/transaction/${id}`);
    const response = await axios(options);
    return response;
  } catch (error) {
    return error.response;
  }
};
