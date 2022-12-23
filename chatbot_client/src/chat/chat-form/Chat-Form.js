import React , {useState}from 'react';
import {useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import messAPI from '../../api/axiosMessage';
import { INPUT_SUCCESS, MESSAGE_SUCCESS } from '../../reducers/messSlice';

import './Chat-Form.css';

function ChatForm() {
    const [message, setMessage] = useState("");
    const messageList = useSelector((state)=>state.mess)
    const navigator = useNavigate()
    const chatbot = useSelector((state)=>state.chat)
    const user = JSON.parse( localStorage.getItem("user"));
    const dispatch = useDispatch();
    const [chatting, setChating] = useState(false);
    //  Function that handles user submission
      const handleClick = async (e) => {
      const code = e.keyCode || e.which;
  
      if (code === 13) {
        //userMessage(message);
        console.log("User", user);
        try {
            if(message !=="" || message !== undefined){
              const firstCheck = messageList.length === 1 ? true : false;
              if(user !== undefined && user !== null){
                if(chatting === false){
                  
                  setChating(true)

                  if( chatbot.price != "0"){
                    const mess = await messAPI.sendMessage(message,chatbot.id,user.id, firstCheck);
                    dispatch(INPUT_SUCCESS(message));
                    setChating(false)
    
                    dispatch(MESSAGE_SUCCESS(mess.message));
                    setMessage("")
                  }
                  else
                  {
                    const mess = await messAPI.chatfree(message,chatbot.id,user.id, firstCheck);
                    dispatch(INPUT_SUCCESS(message));
                    setChating(false)
    
                    dispatch(MESSAGE_SUCCESS(mess.message));
                    setMessage("")
                  }
                  

                }

                
              }
               else{

                if( chatbot.price == "0"){
                  
                  const mess = await messAPI.chatfree(message,chatbot.id,"", firstCheck);

                  dispatch(INPUT_SUCCESS(message));
                  setChating(false)
  
                  dispatch(MESSAGE_SUCCESS(mess.message));
                  setMessage("")
                }
                else {
                  dispatch(INPUT_SUCCESS(message));
                
                  const mess = "You need using the free botchat!";
                  dispatch(MESSAGE_SUCCESS(mess));
                }

               }
            }
            else{

              dispatch(INPUT_SUCCESS(message));
              
              const mess = "You need to input a message!";
               dispatch(MESSAGE_SUCCESS(mess));
            }


          } catch (error) {
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            alert(error);
            navigator("/")
          }
        //sendMessage(message);
        //userMessage(message);
        setMessage("");
        
      }
    };
    return (
        <div id="chat-form" >
            <div className='imgsentChatbot'>
              <img src={require("../../images/icons/icons8-send.png")}  alt="Add Attachment" />
            </div>
            
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