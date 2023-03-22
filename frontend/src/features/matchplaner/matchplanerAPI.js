import axios from "axios";

// base url is set in frontend/package.json ("proxy") to http://localhost:5000
const API_URL = "/api/coach/";

export const getMatches = async (token) => {
  // Token for protected routes
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // axios.post(URL, [Data, [Config]])
  const response = await axios.get(API_URL + "matchplaner", config);

  return response.data;
};

export const createMatch = async (userData, token) => {
  // Token for protected routes
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // axios.post(URL, [Data, [Config]])
  const response = await axios.post(API_URL + "matchplaner", userData, config);

  return response.data;
};

export const updateMatch = async (userData, token) => {
  // Token for protected routes
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // axios.put(URL, [Data, [Config]])
  const response = await axios.put(API_URL + "matchplaner", userData, config);

  return response.data;
};

export const deleteMatch = async (userData, token) => {
  // Token for protected routes and userData
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userData,
    },
  };

  // axios.delete(URL, [Config])
  const response = await axios.delete(API_URL + "matchplaner", config);

  return response.data;
};
