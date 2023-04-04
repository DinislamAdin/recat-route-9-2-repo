import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
// import Friend from '../../components/Friend';

const Frindes = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h3>this is my frindes</h3>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Frindes;