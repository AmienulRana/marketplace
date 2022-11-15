import optionsAxios from "@/utils/optionsAxios";
import axios from "axios";

export const getAllTransactionAPI = async (token) => {
  try {
    const options = optionsAxios("get", token, {}, `/transaction/history`);
    const response = await axios(options);
    return response;
  } catch (error) {
    return error.response;
  }
};
