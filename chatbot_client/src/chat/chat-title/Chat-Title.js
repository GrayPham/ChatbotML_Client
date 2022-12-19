import React from 'react';
import { useSelector } from 'react-redux';

import './Chat-Title.css';
import Paypal from './components/PaypalButton/paypal';

function ChatTitle() {
    const chatbot = useSelector((state)=>state.chat)
    return (
        <div id="chat-title">
            <span>{chatbot.title}</span>
            <Paypal chatbot={chatbot}/>
        </div>
    );
}

export default ChatTitle;