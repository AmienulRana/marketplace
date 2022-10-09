import jwtDecode from "jwt-decode";
const decodeJwtToken = () => {
  const token = localStorage.getItem("token");
  const payload = jwtDecode(token);
  return payload;
};

export default decodeJwtToken;
