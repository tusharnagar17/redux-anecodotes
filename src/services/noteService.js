import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const createReq = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

export default { getAll, createReq };
