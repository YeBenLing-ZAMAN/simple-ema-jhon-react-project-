import './Header.css'    
import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='container'>
            <div className='left-container'>
                <img src={logo} alt="" />
            </div>
            <div className='right-container'>
                <CustomLink to="/">Shop</CustomLink>
                <CustomLink to="/order">Order Review</CustomLink>
                <CustomLink to="/inventory">Manage Inventory</CustomLink>
            </div>
        </nav>
    );
};

export default Header;