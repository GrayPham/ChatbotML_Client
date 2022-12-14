import axiosClient from "./axiosClient";

const userAPI = {
  Login(data) {
    const url = `user/login`;
    return axiosClient.post(url,data);
  },
  register(data){
    const url = `user/register`;
    return axiosClient.post(url,data);
  },
  PaypalPaypment(data){
    const url = `payment/payment`;
    return axiosClient.post(url,data);
  },
  checkPayment(userid,chatbotid){
    const url = `payment/checkpayment`;
    return axiosClient.get(url,userid,chatbotid);
  },
  getUserFull(userid){
   
    const url = `user/userfull?userid=${userid}`;
    return axiosClient.get(url);
  },
  getPaymentDetail(userid,paymentid){
   
    const url = `user/paymentdetails?userid=${userid}&paymentid=${paymentid}`;
    return axiosClient.get(url);
  }

};

export default userAPI;
