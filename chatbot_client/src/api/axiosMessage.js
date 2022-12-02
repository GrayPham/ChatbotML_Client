import axiosClient from "./axiosClient";
import {
    INPUT_SUCCESS,
    INPUT_FAIL,
    SESSION_SUCCESS,
    SESSION_FAIL,
    MESSAGE_SUCCESS,
    MESSAGE_FAIL,
  } from "./types";
//  Sends the message to the bot - API CALL

const messAPI = {
    sendMessage(message) {
      const url = `mess/chatmessages`;
      const body = { 
        userID:"637e409a8105440a2aefef2d",
        botID:"637f394aa90bdae5ab96b6dd",
        message: message };
      return axiosClient.post(url,body);
    }
}
export default messAPI;
// export const sendMessage = (message) => async (dispatch) => {
//     console.log("tesst:",message)
//     try {
//       const body = { 
//         userID:"637e409a8105440a2aefef2d",
//         botID:"637f394aa90bdae5ab96b6dd",
//         message: message };
//       const res = await axiosClient.post("mess/chatmessages", body);
//       console.log(res);
//     //   dispatch({
//     //     type: MESSAGE_SUCCESS,
//     //     // payload: res.data.output.generic[0].text,
  
//     //     payload: res.data.message,
//     //   });
//     } catch (err) {
//     //   dispatch({ type: MESSAGE_FAIL });
//         console.log(err)
//     }
//   };