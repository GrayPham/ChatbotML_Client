import axiosClient from "./axiosClient";

const userAPI = {
  Login(data) {
    const url = `user/login`;
    return axiosClient.post(url,data);
  },
  PaypalPaypment(data){
    const url = `payment/payment`;
    return axiosClient.post(url,data);
  },
  getUserFull(userid){
   
    const url = `user/userfull?userid=${userid}`;
    return axiosClient.get(url);
  }
};

export default userAPI;
