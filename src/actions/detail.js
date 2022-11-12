import CONFIG from "@/config";
import optionsAxios from "@/utils/optionsAxios";
import axios from "axios";

export const checkOngkirAPI = async (data) => {
  try {
    const response = await axios.post(`${CONFIG.URL_API}/user/check-ongkir`, {
      ...data,
    });
    const expensivePrice = [];
    console.log(response)
    const rangeOngkir = response?.data?.rajaongkir?.results[0]?.costs;
    rangeOngkir.map((range) =>
      range.cost.map((ongkir) => expensivePrice.push(ongkir.value))
    );
    const sortThePrice = expensivePrice.sort((a, b) => a - b);
    return sortThePrice[0];
  } catch (error) {
    return error.response;
  }
};

export const addToCartAPI = async (token, payload) => {
  try {
    const options = optionsAxios("post", token, payload, "/cart");
    const response = await axios(options);
    return response;
  } catch (error) {
    return error.response;
  }
};
