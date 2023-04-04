import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const {id,title, body} = post;

    const navigate = useNavigate()
    const handelGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>this is your post of: {id}</h2>
            <h6>{title}</h6>
            <p><small>{body}</small></p>
            <button onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;