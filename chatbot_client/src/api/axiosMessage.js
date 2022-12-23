import axiosClient from "./axiosClient";


const messAPI = {
    sendMessage(message,botIDdata, userIDdata, firstCheckData) {
      const url = `mess/chatmessages`;
      
        try{
          const body = { 

            userID:userIDdata,
            botID:botIDdata,
            message: message ,
            firstCheck:firstCheckData
          };

            const res = axiosClient.post(url,body);
            return res;
            //dispatch(INPUT_SUCCESS( res.message));

        }
        catch (err) {
          console.log(err); 
        }
      
    },
    chatfree(message,botIDdata, userIDdata, firstCheckData) {
      const url = `mess/chatfree`;
      console.log(url);
      try{
        const body = { 

          userID:userIDdata,
          botID:botIDdata,
          message: message ,
          firstCheck:firstCheckData
        };

          const res = axiosClient.post(url,body);
          return res;
          //dispatch(INPUT_SUCCESS( res.message));

      }
      catch (err) {
        console.log(err); 
      }
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