import React from 'react';
import Userlist from '../components/Userlist';
import Messages from '../components/Messages';

const Chat = () =>{
    return (
        <div>
            <Userlist />
            <Messages />
        </div>
    );
}

export default Chat;