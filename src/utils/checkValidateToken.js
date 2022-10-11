const checkValidateToken = (response, toast, router) => {
  if (response?.status === 401 && !response?.data?.auth) {
    toast.error(response?.data?.message);
    return router.push({ name: "login" });
  } else if (response?.status > 400) {
    toast.error(response?.data?.message);
  }
};

export default checkValidateToken;
