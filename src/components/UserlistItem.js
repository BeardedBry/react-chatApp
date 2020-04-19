import React from 'react';

const UserlistItem = ({name}) => {

    return (
        <div id="userlist-item">
        <span>{name}</span>
        </div>
    );
}

export default UserlistItem;