import { instance as axiosInstance } from "api/SuperFetch";

const auth = ({ getState }) => (next) => (action) => {
  const { token } = getState().auth;
  if (token)
    axiosInstance.defaults.headers.common["Authorization"] = `Token ${encodeURI(
      token
    )}`;
  next(action);
};

export default auth;
