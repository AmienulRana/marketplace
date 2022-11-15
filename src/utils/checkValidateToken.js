const checkValidateToken = (response, toast, router) => {
  if (response?.status === 401 && !response?.data?.auth) {
    toast.error(response?.data?.message);
    localStorage.removeItem('token');
    return window.location.href = '/login';
  } else if (response?.status >= 200 && response?.status < 300) {
    if (response?.data?.message) {
      toast.success(response?.data?.message);
    }
  } else if (response?.status > 400) {
    toast.error(response?.data?.message);
  }
};

export default checkValidateToken;
