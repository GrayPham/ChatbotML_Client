import React , {useState}from 'react';
import {useDispatch } from "react-redux";
import messAPI from '../../api/axiosMessage';
import { INPUT_SUCCESS, MESSAGE_SUCCESS } from '../../reducers/messSlice';

import './Chat-Form.css';

function ChatForm() {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    //  Function that handles user submission
      const handleClick = async (e) => {
      const code = e.keyCode || e.which;
  
      if (code === 13) {
        //userMessage(message);
        try {
            dispatch(INPUT_SUCCESS(message));
             const mess = await messAPI.sendMessage(message);
              console.log("mess here",mess);
             dispatch(MESSAGE_SUCCESS(mess.message));

          } catch (error) {
            console.log("Fail to fetch message", { error });
          }
        //sendMessage(message);
        //userMessage(message);
        setMessage("");
        
      }
    };
    return (
        <div id="chat-form" >
            <img src={require("../../images/icons/icons8-send.png")}  alt="Add Attachment" />
            <input type="text" 
                placeholder="type a message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleClick}
                 />
        </div>
    );
}

export default ChatForm;