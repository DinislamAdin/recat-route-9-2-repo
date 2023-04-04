import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)

    return (
        <div>
            <h3>this is friend details</h3>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Id: {friend.id}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;