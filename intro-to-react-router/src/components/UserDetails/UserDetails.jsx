import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    // console.log(user);
    const {website, name} = user;
    return (
        <div>
            <h3>User details here</h3>
            <h1>Name: {name}</h1>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;