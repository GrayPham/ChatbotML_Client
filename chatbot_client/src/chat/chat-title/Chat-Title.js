import React, {useState,useCallback} from 'react';
import { useSelector } from 'react-redux';

import './Chat-Title.css';
import Paypal from './components/PaypalButton/paypal';

function ChatTitle() {
    const chatbot = useSelector((state)=>state.chat)
    const [orderID, setOrderID] = useState(false);
    const [amount, setAmount] = useState(chatbot.prices);
    const createOrder = useCallback((data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: chatbot.title,
                        amount: {
                            value: amount,
                        }
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    }, [amount]);
    return (
        <div id="chat-title">
            <span>{chatbot.title}</span>
            <Paypal createOrder={createOrder} forceReRender={createOrder} chatbot={chatbot}/>
        </div>
    );
}

export default ChatTitle;