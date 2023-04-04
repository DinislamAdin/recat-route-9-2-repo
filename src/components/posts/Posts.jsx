import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>there is: {posts.length} posts</h1>
          <div>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
          </div>
        </div>
    );
};

export default Posts;