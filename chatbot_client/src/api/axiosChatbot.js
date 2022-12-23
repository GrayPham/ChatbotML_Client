import axiosClient from "./axiosClient";

const chatBotAPI = {
  getAllChatBot() {
    const url = `chat/allbot`;
    console.log(url)
    return axiosClient.get(url);
  },
  AddChatbot(chat) {
    const url = `chat/createchat`;
    return axiosClient.post(url, chat);
  },

};

export default chatBotAPI;
