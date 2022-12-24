import axios from "axios";



const axiosClient = axios.create({
  baseURL: "https://chatbotbuilding.azurewebsites.net/api/",
  headers: {
    "content-type": "application/json",
  },

  
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {};
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    customHeaders.Authorization = `Bearer ${accessToken} `;
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  };
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data; //get Data only
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
