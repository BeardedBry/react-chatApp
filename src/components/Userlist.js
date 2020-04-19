import React from 'react';

const Userlist = () =>{

    const Users = ['Kaitlin', 'Brian', 'Matt', 'Beth', 'Grace'];

    return (
        <div>
        <h2>Users Online: {Users.length} </h2>
        {
            Users.map((user)=>{
             return <p key={user.toString()}>{user}</p>   
            })
        }
        </div>
    );
}

export default Userlist;