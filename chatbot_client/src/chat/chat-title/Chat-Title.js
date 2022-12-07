import React from 'react';
import { useSelector } from 'react-redux';

import './Chat-Title.css';

function ChatTitle() {
    const chatbot = useSelector((state)=>state.chat)
    return (
        <div id="chat-title">
            <span>{chatbot.title}</span>
            <img src={require("../../images/icons/icons8-paypal.png")} alt="Paypal" />
        </div>
    );
}

export default ChatTitle;