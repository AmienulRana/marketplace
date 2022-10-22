import jwtDecode from "jwt-decode";
const decodeJwtToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  } else {
    const payload = jwtDecode(token);
    return payload;
  }
};

export default decodeJwtToken;
