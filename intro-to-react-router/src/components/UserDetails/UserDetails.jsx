import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const navigate = useNavigate();

    const {userId} = useParams();
    console.log(userId);

    // const params = useParams();
    // console.log(params)

    
    // console.log(user);
    const {website, name} = user;
    return (
        <div>
            <h3>User details here</h3>
            <h1>Name: {name}</h1>
            <p>Website: {website}</p>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
    );
};

export default UserDetails;