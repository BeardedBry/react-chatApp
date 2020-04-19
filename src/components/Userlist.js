import React from 'react';
import UserlistItem from './UserlistItem';

const Userlist = () =>{

    const Users = [
        {name: 'Kaitlin'},
        {name: 'Brian'},
        {name: 'Matt'},
        {name: 'Beth'},
        {name: 'Grace'}
    ];

    return (
        <div id="userlist">
            <h2>Users Online: {Users.length} </h2>
            <ul>
            {
                Users.map( (user) =>
                    <li key={user.name.toString()}>
                        <UserlistItem {...user}/>
                    </li>   
                )
            }
            </ul>
        </div>
    );
}

export default Userlist;