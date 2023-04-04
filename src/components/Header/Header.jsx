import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActivLink/ActiveLink';

const Header = () => {
    return (
        <nav className='nav'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/frindes">Frindes</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
        </nav>
    );
};

export default Header;