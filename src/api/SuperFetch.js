import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_BASEURL || "http://localhost:8000";
export const instance = axios.create({
  baseURL,
});


const SuperFetch = async (url, optionsProps = {}) => {
  const options = {
    url,
    ...optionsProps,
  };
  return await instance(options);
};

export default SuperFetch;
