import React from 'react';
import './post.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate() 

    const handelNavigation  =()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h4>Id: {id}</h4>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>show post Details</button></Link>
            <button onClick={handelNavigation}>with button handel</button>
        </div>
    );
};

export default Post;