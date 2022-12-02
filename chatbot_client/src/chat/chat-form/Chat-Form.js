import React , {useState}from 'react';
import messAPI from '../../api/axiosMessage';

import './Chat-Form.css';

function ChatForm() {
    const [message, setMessage] = useState("");
    //  Function that handles user submission
      const handleClick = async (e) => {
      const code = e.keyCode || e.which;
  
      if (code === 13) {
        console.log(message);
        //userMessage(message);
        try {
             await messAPI.sendMessage(message);

            

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
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleClick}
                 />
        </div>
    );
}

export default ChatForm;