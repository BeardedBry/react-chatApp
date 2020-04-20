import React from 'react';

const ChatInput = () => {
    return (
        <div id="chatinput">
            <div className="chatinput-wrapper">
                <input 
                    id="chat-message"
                    className="chatinput-input"
                    type={Text}
                    placeholder={'Chat Message'}
                    autoFocus={true}
                />
            </div>
        </div>
    )
}

export default ChatInput;