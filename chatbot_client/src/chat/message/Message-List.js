import React, {useEffect, useMemo, useState,Component } from "react";
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
                                <img src={require("../../images/profiles/daryl.png")} alt={chatbot.title} />
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