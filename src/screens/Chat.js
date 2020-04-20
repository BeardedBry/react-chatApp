import React, {useEffect, useState} from 'react';
import ChatInput from '../components/ChatInput';
import Messages from '../components/Messages';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';

// Chat screen. Main part of App.
const Chat = () =>{

    const [sidebarStatus, setSidebarStatus] = useState('closed');

    function toggleSidebar(){
        sidebarStatus === 'closed' ? setSidebarStatus('open') : setSidebarStatus('closed');
    }

    return (
        <div>
            <div id="sidebar" className={`sidebar-${sidebarStatus}`}>
                <Sidebar />
            </div>
            <Slider toggle={toggleSidebar} status={sidebarStatus} />
            <div id="main" className={`slider-${sidebarStatus}`}>
                <div className={`mainwidth-${sidebarStatus}`}>
                    <Messages />
                    <ChatInput />
                </div>
            </div>
        </div>
    );
}

export default Chat;
