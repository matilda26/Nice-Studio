import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom'

const Header = () => (
    <div className='header__links'>
        <Link to='/' className='header__link'>gradient</Link>
        <Link to='/cutout' className='header__link'>cutout</Link>
    </div>
)

export default Header;
