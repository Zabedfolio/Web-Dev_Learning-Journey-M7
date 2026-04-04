// import React, { use } from 'react';

const User = ({user}) => {
    // const user = use(userPromise);
    // console.log("hello",user);

    const {name, email,phone} = user;

    const userStyle = {
        border: '2px solid gray',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
        </div>
    );
};

export default User;