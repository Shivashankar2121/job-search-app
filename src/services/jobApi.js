import axios from "axios";

const BASE_URL = "https://remotive.com/api/remote-jobs";

export const getJobs = async (searchQuery = "") => {
  const url = searchQuery ? `${BASE_URL}?search=${searchQuery}` : BASE_URL;
  const response = await axios.get(url);
  return response.data.jobs;
};
