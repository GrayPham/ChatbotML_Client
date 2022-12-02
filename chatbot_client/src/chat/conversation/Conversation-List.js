import React, {useEffect, useMemo, useState,Component } from "react";
import ReactDOM from 'react-dom'
import { useHistory, useLocation } from "react-router-dom";
import chatBotAPI from "../../api/axiosChatbot";
import './Conversation-List.css';

    //const [loading, setLoading] = useState(true);
 
export default function ConversationList() {
    const [botList, setBotList] = useState([]);
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

    return (
        <div id="conversation-list">
            {
                botList.map((bot,index)=>
                    <div className="conversation " key={index}>
                        <img src={bot.linkAvatar} alt={bot.title} />
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

