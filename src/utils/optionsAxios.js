import CONFIG from "@/config";
const optionsAxios = (method, token, payload, url) => {
  const autToken = token || CONFIG.token;
  const options = {
    url: `${CONFIG.URL_API}${url}`,
    method: method,
    headers: {
      Authorization: `Bearer ${autToken}`,
    },
    data: {
      ...payload,
    },
  };
  return options;
};
export default optionsAxios;
