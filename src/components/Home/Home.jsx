import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header></Header>
            <div>{navigate.state === 'loading' && 'loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;