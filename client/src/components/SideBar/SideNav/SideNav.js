import React, { useState } from 'react';
import './SideNav.css';
import { useHistory, useLocation, Link } from "react-router-dom";


const SideNav = () => {
    const history = useHistory();
    const location = useLocation();


    const handleLinkClick = (path) => {
        if (location.pathname !== path) {
            history.push(path);
        } else {
            console.log('same path');
        }

    }

    return (
        <nav style={{ margin: '70px 0px 0px 0px', fontSize: '16px' }}>
            <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/projects') }} className='sideNavLink' to='/projects'>Projects</Link>
            <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/resume') }} className='sideNavLink' to='/resume'>CV</Link>
            <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/contact') }} className='sideNavLink' to='/contact'>Contact</Link>
        </nav>)
}

export default SideNav;
