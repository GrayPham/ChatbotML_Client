import React, {useState} from 'react';
import ChatSearch from '../search/Chat-Search';
import ConversationList from '../conversation/Conversation-List';
import NewConversation from '../conversation/New-Conversation';
import ChatTitle from '../chat-title/Chat-Title';
import MessageList from '../message/Message-List';
import ChatForm from '../chat-form/Chat-Form';

import './Chat-Shell.css';
import SideMenu from '../../component/menu/SideMenu';

function ChatShell() {
    const [inactive, setInactive] = useState(true);
    return (
    <>
        <SideMenu onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
            
          }}/>
        <div className='chat-shell-element'>
            <div id="chat-container" >
                <ChatSearch />
                <ConversationList />
                <NewConversation />
                <ChatTitle />
                <MessageList  />
                <ChatForm  />
            </div>
        </div>
    </>
    );
}

export default ChatShell;