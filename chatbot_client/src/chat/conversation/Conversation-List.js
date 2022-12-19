import React, {useEffect,  useState } from "react";

import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import chatBotAPI from "../../api/axiosChatbot";
import { updateChatbotCurrent, } from "../../reducers/chatbotSlice";
import { MESSAGE_CLEAR } from "../../reducers/messSlice";
import './Conversation-List.css';

    //const [loading, setLoading] = useState(true);
 
export default function ConversationList() {
    const [botList, setBotList] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    useEffect(() => {
      (async () => {
        try {
          const  data  = await chatBotAPI.getAllChatBot();
          setBotList(data);
          //setPagination(pagination);
          console.log(data)
        } catch (error) {
          console.log("Fail to fetch product list", { error });
        }
  
        //setLoading(false);
      })();
    }, []);
    const handleClick =bot =>(e)=>{
        e.preventDefault();
        if(user){
        const ChatbotCurrent = {
            id: bot.id,
            linkAvatar: bot.linkAvatar,
            title: bot.title,
            price: bot.prices
        }
        dispatch(updateChatbotCurrent(ChatbotCurrent))
        dispatch(MESSAGE_CLEAR("Hello, Can I help you?"))
        }
        else {
            navigate("/login")
        }
    }
    return (
        <div id="conversation-list">
            {
                botList.map((bot,index)=>
                    
                        <div className="conversation " key={index} onClick={handleClick(bot)}>
                            <img src={bot.linkAvatar} alt={bot.title}  />
                            <div className="title-text">{bot.title}</div>
                            <div className="created-date">Apr 16</div>
                            <div className="conversation-message">
                            Prices: {bot.prices}
                            </div>
                        </div>
                    
                )
                
            }
            {/* active or not */}
            <div className="conversation active"> 
                <img src={require("../../images/profiles/daryl.png")} alt="Daryl Duckmanton" />
                <div className="title-text">Daryl Duckmanton</div>
                <div className="created-date">Apr 16</div>
                <div className="conversation-message">
                    This is a message
                </div>
            </div>
            
        </div>
    );
}

