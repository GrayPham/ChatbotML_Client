import React from "react";
import { useSelector } from "react-redux";

import './Message-List.css';

function MessageList() {
    const messageList = useSelector((state)=>state.mess)
    const chatbot = useSelector((state)=>state.chat)
    return (
        <div id="chat-message-list">
            
            {
                
                messageList.map((mess,index)=> 
                    mess.type === "bot"? (
                        <div className="message-row other-message">
                            <div className="message-content">
                                <img  src={chatbot.linkAvatar} style={{width: '48px', height:'48px',}} alt={chatbot.title} />
                                <div className="message-text">
                                    {mess.message}
                                </div>
                                <div className="message-time">{mess.time}</div>
                            </div>
                        </div>
                    ):(
                        <div className="message-row you-message">
                            <div className="message-content">
                                <div className="message-text">{mess.message}</div>
                                <div className="message-time">{mess.time}</div>
                            </div>
                        </div>
                    )            
                )
                    
                
               
                
                
            }

            
            
        </div>
        
    );
}

export default MessageList;