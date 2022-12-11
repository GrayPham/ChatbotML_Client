import axiosClient from "./axiosClient";

const userAPI = {
  Login(data) {
    const url = `user/login`;
    return axiosClient.post(url,data);
  }
};

export default userAPI;
