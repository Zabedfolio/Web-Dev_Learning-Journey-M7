// import React, { use } from 'react';

import { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({user}) => {

    const [showInfo, setShowInfo] = useState(false);
    // const user = use(userPromise);
    // console.log("hello",user);

    const {id, name, email,phone} = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/users/${id}`)
    }

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
            {/* <Link to={`/users/${id}`}>Show Details</Link> */}
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={handleNavigate}>Details</button>
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? 'Hide':'Show'} Info</button>
            
        </div>
    );
};

export default User;